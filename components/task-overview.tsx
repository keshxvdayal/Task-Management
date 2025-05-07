import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

interface Task {
  id: string
  title: string
  status: string
  priority: string
  dueDate: Date | null
  createdAt: Date
  updatedAt: Date
  assignee: {
    name: string | null
    image: string | null
  }
  creator: {
    name: string | null
  }
}

interface TaskOverviewProps {
  tasks: Task[]
}

export function TaskOverview({ tasks }: TaskOverviewProps) {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
        <CardDescription>Your most recently updated tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">No tasks found</div>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col">
                    <Link href={`/tasks/${task.id}`} className="font-medium hover:underline">
                      {task.title}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getStatusColor(task.status)} variant="secondary">
                        {task.status.replace("_", " ")}
                      </Badge>
                      <Badge className={getPriorityColor(task.priority)} variant="secondary">
                        {task.priority}
                      </Badge>
                      {task.dueDate && (
                        <span className="text-xs text-muted-foreground">
                          Due {formatDistanceToNow(new Date(task.dueDate), { addSuffix: true })}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-right text-muted-foreground">
                    {formatDistanceToNow(new Date(task.updatedAt), { addSuffix: true })}
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={task.assignee.image || ""} alt={task.assignee.name || ""} />
                    <AvatarFallback>
                      {task.assignee.name ? task.assignee.name.charAt(0).toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
