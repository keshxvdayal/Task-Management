import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { notFound, redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { TaskForm } from "@/components/task-form"
import { db } from "@/lib/db"

export const metadata: Metadata = {
  title: "Edit Task",
  description: "Edit task details",
}

interface EditTaskPageProps {
  params: {
    id: string
  }
}

export default async function EditTaskPage({ params }: EditTaskPageProps) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const task = await db.task.findUnique({
    where: { id: params.id },
    include: {
      assignee: true,
    },
  })

  if (!task) {
    notFound()
  }

  // Only the creator can edit the task
  if (task.creatorId !== session.user.id) {
    redirect(`/tasks/${params.id}`)
  }

  // Get all users for assignee dropdown
  const users = await db.user.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Edit Task" text="Edit task details">
        <Button asChild variant="outline">
          <Link href={`/tasks/${params.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </DashboardHeader>
      <TaskForm users={users} task={task} />
    </DashboardShell>
  )
}
