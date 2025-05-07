import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { notFound, redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Edit } from "lucide-react"
import { TaskDetails } from "@/components/task-details"
import { db } from "@/lib/db"

export const metadata: Metadata = {
  title: "Task Details",
  description: "View task details",
}

interface TaskPageProps {
  params: {
    id: string
  }
}

export default async function TaskPage({ params }: TaskPageProps) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const task = await db.task.findUnique({
    where: { id: params.id },
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
  })

  if (!task) {
    notFound()
  }

  const isCreator = task.creatorId === session.user.id

  return (
    <DashboardShell>
      <DashboardHeader heading={task.title} text="Task details">
        <div className="flex space-x-2">
          <Button asChild variant="outline">
            <Link href="/tasks">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
          {isCreator && (
            <Button asChild>
              <Link href={`/tasks/${params.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </Button>
          )}
        </div>
      </DashboardHeader>
      <TaskDetails task={task} canEdit={isCreator} />
    </DashboardShell>
  )
}
