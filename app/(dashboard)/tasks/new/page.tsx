import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { TaskForm } from "@/components/task-form"
import { db } from "@/lib/db"

export const metadata: Metadata = {
  title: "New Task",
  description: "Create a new task",
}

export default async function NewTaskPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
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
      <DashboardHeader heading="New Task" text="Create a new task">
        <Button asChild variant="outline">
          <Link href="/tasks">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </DashboardHeader>
      <TaskForm users={users} />
    </DashboardShell>
  )
}
