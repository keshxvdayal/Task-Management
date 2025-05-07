import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { TaskOverview } from "@/components/task-overview"
import { TaskStats } from "@/components/task-stats"
import { recentTasksAction } from "@/app/(dashboard)/dashboard/actions"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Task overview and statistics",
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const userId = session.user.id

  // Get task statistics
  const assignedCount = await db.task.count({
    where: {
      assigneeId: userId,
      status: { not: "COMPLETED" },
    },
  })

  const createdCount = await db.task.count({
    where: {
      creatorId: userId,
    },
  })

  const overdueCount = await db.task.count({
    where: {
      assigneeId: userId,
      dueDate: {
        lt: new Date(),
      },
      status: { not: "COMPLETED" },
    },
  })

  const completedCount = await db.task.count({
    where: {
      assigneeId: userId,
      status: "COMPLETED",
    },
  })

  // Get recent tasks
  const recentTasks = await recentTasksAction(userId)

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Overview of your tasks and activity" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <TaskStats title="Assigned to you" value={assignedCount} description="Tasks assigned to you" />
        <TaskStats title="Created by you" value={createdCount} description="Tasks you created" />
        <TaskStats
          title="Overdue"
          value={overdueCount}
          description="Tasks past due date"
          className="bg-red-50 dark:bg-red-950/20"
          textClass="text-red-600 dark:text-red-400"
        />
        <TaskStats
          title="Completed"
          value={completedCount}
          description="Tasks you've completed"
          className="bg-green-50 dark:bg-green-950/20"
          textClass="text-green-600 dark:text-green-400"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-1">
        <TaskOverview tasks={recentTasks} />
      </div>
    </DashboardShell>
  )
}
