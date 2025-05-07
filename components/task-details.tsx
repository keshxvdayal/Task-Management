"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { format } from "date-fns"
import { CalendarIcon, Edit, Trash2, Check, Clock, AlertCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useToast } from "@/hooks/use-toast"
import { deleteTaskAction, updateTaskStatusAction } from "@/app/(dashboard)/tasks/actions"

interface Task {
  id: string
  title: string
  description: string | null
  status: string
  priority: string
  dueDate: Date | null
  createdAt: Date
  updatedAt: Date
  assignee: {
    id: string
    name: string | null
    image: string | null
  }
  creator: {
    id: string
    name: string | null
  }
}

interface TaskDetailsProps {
  task: Task
  canEdit: boolean
}

export function TaskDetails({ task, canEdit }: TaskDetailsProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isStatusUpdating, setIsStatusUpdating] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(task.status)

  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      const result = await deleteTaskAction(task.id)

      if (!result.success) {
        throw new Error(result.error || "Failed to delete task")
      }

      toast({
        title: "Success",
        description: "Task deleted successfully",
      })

      router.push("/tasks")
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  const handleStatusUpdate = async (status: string) => {
    if (status === currentStatus) return

    setIsStatusUpdating(true)

    try {
      const result = await updateTaskStatusAction(task.id, status as any)

      if (!result.success) {
        throw new Error(result.error || "Failed to update task status")
      }

      setCurrentStatus(status)

      toast({
        title: "Success",
        description: `Task marked as ${status.replace("_", " ")}`,
      })

      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsStatusUpdating(false)
    }
  }

  const isDueSoon =
    task.dueDate &&
    new Date(task.dueDate) > new Date() &&
    new Date(task.dueDate).getTime() - new Date().getTime() < 86400000 * 2 // 2 days

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && currentStatus !== "COMPLETED"

  const getPriorityIcon = () => {
    switch (task.priority) {
      case "LOW":
        return null
      case "MEDIUM":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "HIGH":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              {task.title}
              {getPriorityIcon()}
            </CardTitle>
            <CardDescription>
              Created by {task.creator.name} on {format(new Date(task.createdAt), "PPP")}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={currentStatus} />
            <PriorityBadge priority={task.priority} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {task.description ? (
            <div className="prose dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap">{task.description}</div>
            </div>
          ) : (
            <p className="text-muted-foreground">No description provided</p>
          )}

          <div className="grid gap-2 md:grid-cols-2">
            <div className="flex items-center gap-2 text-sm">
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Due Date:</span>
              {task.dueDate ? (
                <span
                  className={cn(
                    isOverdue ? "text-red-500 font-medium" : "",
                    isDueSoon ? "text-amber-500 font-medium" : "",
                  )}
                >
                  {format(new Date(task.dueDate), "PPP")}
                  {isOverdue && " (Overdue)"}
                  {isDueSoon && !isOverdue && " (Due soon)"}
                </span>
              ) : (
                <span className="text-muted-foreground">No due date</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Assignee:</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={task.assignee.image || ""} alt={task.assignee.name || ""} />
                      <AvatarFallback>
                        {task.assignee.name ? task.assignee.name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span>{task.assignee.name}</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80" side="top">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src={task.assignee.image || ""} />
                      <AvatarFallback>
                        {task.assignee.name ? task.assignee.name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{task.assignee.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Assigned on {format(new Date(task.createdAt), "PPP")}
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2">
            {currentStatus !== "COMPLETED" && (
              <Button
                variant="outline"
                size="sm"
                className="gap-1"
                onClick={() => handleStatusUpdate("COMPLETED")}
                disabled={isStatusUpdating}
              >
                <Check className="h-4 w-4" />
                Mark as Completed
              </Button>
            )}
            {currentStatus === "COMPLETED" && (
              <Button
                variant="outline"
                size="sm"
                className="gap-1"
                onClick={() => handleStatusUpdate("TODO")}
                disabled={isStatusUpdating}
              >
                Reopen Task
              </Button>
            )}
          </div>
          {canEdit && (
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/tasks/${task.id}/edit`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm" disabled={isDeleting}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the task.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "TODO":
        return "bg-slate-500"
      case "IN_PROGRESS":
        return "bg-blue-500"
      case "REVIEW":
        return "bg-amber-500"
      case "COMPLETED":
        return "bg-green-500"
      default:
        return "bg-slate-500"
    }
  }

  return (
    <Badge className={getStatusColor(status)} variant="secondary">
      {status.replace("_", " ")}
    </Badge>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "LOW":
        return "bg-slate-500"
      case "MEDIUM":
        return "bg-amber-500"
      case "HIGH":
        return "bg-red-500"
      default:
        return "bg-slate-500"
    }
  }

  return (
    <Badge className={getPriorityColor(priority)} variant="secondary">
      {priority}
    </Badge>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
