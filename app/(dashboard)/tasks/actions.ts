"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import type { Task } from "@prisma/client"

interface GetAllTasksParams {
  userId: string
  status?: string
  priority?: string
  query?: string
  sort?: string
}

export async function getAllTasksAction({ userId, status, priority, query, sort = "dueDate-asc" }: GetAllTasksParams) {
  try {
    const [sortField, sortOrder] = sort.split("-")

    const tasks = await db.task.findMany({
      where: {
        OR: [{ assigneeId: userId }, { creatorId: userId }],
        ...(status && { status }),
        ...(priority && { priority }),
        ...(query && {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        }),
      },
      include: {
        assignee: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        creator: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        [sortField || "dueDate"]: sortOrder === "desc" ? "desc" : "asc",
      },
    })

    return tasks
  } catch (error) {
    console.error("Failed to fetch tasks:", error)
    return []
  }
}

export async function deleteTaskAction(id: string) {
  try {
    await db.task.delete({
      where: { id },
    })

    revalidatePath("/tasks")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to delete task" }
  }
}

const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  assigneeId: z.string().optional(),
})

export async function createTaskAction(data: z.infer<typeof createTaskSchema>, creatorId: string) {
  try {
    const validatedData = createTaskSchema.parse(data)

    await db.task.create({
      data: {
        title: validatedData.title,
        description: validatedData.description || "",
        dueDate: validatedData.dueDate ? new Date(validatedData.dueDate) : null,
        priority: validatedData.priority,
        status: "TODO",
        creatorId,
        assigneeId: validatedData.assigneeId || creatorId,
      },
    })

    // Here you would trigger a notification for the assignee
    // using your notification system

    revalidatePath("/tasks")
    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    return { success: false, error: "Failed to create task" }
  }
}

const updateTaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  status: z.enum(["TODO", "IN_PROGRESS", "REVIEW", "COMPLETED"]),
  assigneeId: z.string().optional(),
})

export async function updateTaskAction(data: z.infer<typeof updateTaskSchema>) {
  try {
    const validatedData = updateTaskSchema.parse(data)

    const previousTask = await db.task.findUnique({
      where: { id: validatedData.id },
      select: { assigneeId: true },
    })

    const updatedTask = await db.task.update({
      where: { id: validatedData.id },
      data: {
        title: validatedData.title,
        description: validatedData.description || "",
        dueDate: validatedData.dueDate ? new Date(validatedData.dueDate) : null,
        priority: validatedData.priority,
        status: validatedData.status,
        assigneeId: validatedData.assigneeId,
      },
    })

    // If assignee has changed, trigger notification
    if (previousTask && previousTask.assigneeId !== validatedData.assigneeId) {
      // Here you would trigger a notification for the new assignee
    }

    revalidatePath("/tasks")
    return { success: true, task: updatedTask }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    return { success: false, error: "Failed to update task" }
  }
}

export async function updateTaskStatusAction(id: string, status: Task["status"]) {
  try {
    await db.task.update({
      where: { id },
      data: { status },
    })

    revalidatePath("/tasks")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to update task status" }
  }
}
