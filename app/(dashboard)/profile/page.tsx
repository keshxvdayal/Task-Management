import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ProfileForm } from "@/components/profile-form"
import { db } from "@/lib/db"

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your profile",
}

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
  })

  if (!user) {
    redirect("/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Profile" text="Manage your account settings" />
      <div className="grid gap-10">
        <ProfileForm user={user} />
      </div>
    </DashboardShell>
  )
}
