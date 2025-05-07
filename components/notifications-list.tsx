"use client"

import { formatDistanceToNow } from "date-fns"
import { Bell } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: string
  read: boolean
  linkTo?: string | null
  createdAt: Date
}

interface NotificationsListProps {
  notifications: Notification[]
}

export function NotificationsList({ notifications }: NotificationsListProps) {
  const markAllAsRead = async () => {
    // This would typically call a server action or API endpoint
    // For now, this is a placeholder for future implementation
    console.log("Mark all as read")
  }

  if (notifications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You don&apos;t have any notifications yet</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <Bell className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-center text-muted-foreground">When you receive notifications, they will appear here</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have {notifications.filter((n) => !n.read).length} unread notifications</CardDescription>
        </div>
        <Button variant="ghost" onClick={markAllAsRead} disabled={!notifications.some((n) => !n.read)}>
          Mark all as read
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start p-3 rounded-md transition-colors ${
                notification.read ? "bg-background hover:bg-muted/50" : "bg-muted hover:bg-muted/80"
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  {!notification.read && <Badge variant="default" className="h-1.5 w-1.5 rounded-full p-0" />}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
                <div className="mt-2 flex items-center gap-4">
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(notification.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                  {notification.linkTo && (
                    <Link href={notification.linkTo} className="text-xs font-medium text-primary hover:underline">
                      View
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Load more
        </Button>
      </CardFooter>
    </Card>
  )
}
