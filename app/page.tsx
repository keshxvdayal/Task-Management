import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Task Management System</div>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Manage Your Team&apos;s Tasks Efficiently
            </h1>
            <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
              A comprehensive task management system for small teams. Create, assign, track, and manage tasks in one
              place.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-lg border bg-card p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Task Management</h3>
              <p className="text-muted-foreground">
                Create, update, and delete tasks with title, description, due date, priority, and status.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border bg-card p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Assign tasks to team members and receive notifications for assigned tasks.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border bg-card p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Dashboard</h3>
              <p className="text-muted-foreground">
                View tasks assigned to you, tasks you created, and track overdue tasks.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Task Management System</p>
        </div>
      </footer>
    </div>
  )
}
