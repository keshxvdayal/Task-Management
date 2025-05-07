import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { NotificationsList } from "@/components/notifications-list"
import { db } from "@/lib/db"

export const metadata: Metadata = {
  title: "Notifications",
  description: "Manage your notifications",
}

export default async function NotificationsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const notifications = await db.notification.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 50,
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Notifications" text="Manage your notifications" />
      <div className="grid gap-6">
        <NotificationsList notifications={notifications} />
      </div>
    </DashboardShell>
  )
}
