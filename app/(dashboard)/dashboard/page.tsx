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
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg -z-10" />
        <div className="mb-8">
          <DashboardHeader 
            heading="Dashboard" 
            text="Overview of your tasks and activity" 
          />
        </div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <TaskStats 
          title="Assigned to you" 
          value={assignedCount} 
          description="Tasks assigned to you"
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 hover:shadow-lg transition-shadow"
          textClass="text-blue-600 dark:text-blue-400"
        />
        <TaskStats 
          title="Created by you" 
          value={createdCount} 
          description="Tasks you created"
          className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 hover:shadow-lg transition-shadow"
          textClass="text-purple-600 dark:text-purple-400"
        />
        <TaskStats
          title="Overdue"
          value={overdueCount}
          description="Tasks past due date"
          className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 hover:shadow-lg transition-shadow"
          textClass="text-red-600 dark:text-red-400"
        />
        <TaskStats
          title="Completed"
          value={completedCount}
          description="Tasks you've completed"
          className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 hover:shadow-lg transition-shadow"
          textClass="text-green-600 dark:text-green-400"
        />
      </div>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-lg -z-10" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Recent Tasks</h2>
            <TaskOverview tasks={recentTasks} />
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
