"use client"

import { useState } from "react"
import Link from "next/link"
import { MoreHorizontal, Trash2, Edit, Eye } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { deleteTaskAction, updateTaskStatusAction } from "@/app/(dashboard)/tasks/actions"
import { formatDistanceToNow } from "date-fns"

interface Task {
  id: string
  title: string
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

interface TasksTableProps {
  tasks: Task[]
}

export function TasksTable({ tasks }: TasksTableProps) {
  const { toast } = useToast()
  const [optimisticTasks, setOptimisticTasks] = useState(tasks)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

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

  const handleStatusChange = async (taskId: string, status: string) => {
    // Optimistic update
    setOptimisticTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, status } : task)))

    const result = await updateTaskStatusAction(taskId, status as any)

    if (!result.success) {
      // Revert if failed
      setOptimisticTasks(tasks)

      toast({
        title: "Error",
        description: result.error || "Failed to update task status",
        variant: "destructive",
      })
    }
  }

  const handleDelete = async (id: string) => {
    setIsDeleting(id)

    // Optimistic update
    setOptimisticTasks((prev) => prev.filter((task) => task.id !== id))

    const result = await deleteTaskAction(id)

    if (!result.success) {
      // Revert if failed
      setOptimisticTasks(tasks)

      toast({
        title: "Error",
        description: result.error || "Failed to delete task",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Success",
        description: "Task deleted successfully",
      })
    }

    setIsDeleting(null)
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {optimisticTasks.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No tasks found.
              </TableCell>
            </TableRow>
          ) : (
            optimisticTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">
                  <Link href={`/tasks/${task.id}`} className="hover:underline">
                    {task.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Select defaultValue={task.status} onValueChange={(value) => handleStatusChange(task.id, value)}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TODO">To Do</SelectItem>
                      <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                      <SelectItem value="REVIEW">Review</SelectItem>
                      <SelectItem value="COMPLETED">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Badge className={getPriorityColor(task.priority)} variant="secondary">
                    {task.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={task.assignee.image || ""} alt={task.assignee.name || ""} />
                      <AvatarFallback>
                        {task.assignee.name ? task.assignee.name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span>{task.assignee.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {task.dueDate ? formatDistanceToNow(new Date(task.dueDate), { addSuffix: true }) : "No due date"}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/tasks/${task.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/tasks/${task.id}/edit`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDelete(task.id)}
                        disabled={isDeleting === task.id}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
