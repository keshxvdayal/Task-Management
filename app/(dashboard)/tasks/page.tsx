import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { TasksTable } from "@/components/tasks-table"
import { TasksFilter } from "@/components/tasks-filter"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"
import { getAllTasksAction } from "@/app/(dashboard)/tasks/actions"

export const metadata: Metadata = {
  title: "Tasks",
  description: "Manage your tasks",
}

interface TasksPageProps {
  searchParams: {
    status?: string
    priority?: string
    q?: string
    sort?: string
  }
}

export default async function TasksPage({ searchParams }: TasksPageProps) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const userId = session.user.id

  const tasks = await getAllTasksAction({
    userId,
    status: searchParams.status,
    priority: searchParams.priority,
    query: searchParams.q,
    sort: searchParams.sort,
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Tasks" text="Manage your tasks">
        <Button asChild>
          <Link href="/tasks/new">
            <Plus className="mr-2 h-4 w-4" />
            New Task
          </Link>
        </Button>
      </DashboardHeader>
      <div>
        <TasksFilter />
        <TasksTable tasks={tasks} />
      </div>
    </DashboardShell>
  )
}
