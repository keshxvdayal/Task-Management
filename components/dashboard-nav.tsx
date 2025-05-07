"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Home, ListChecks, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DashboardNavProps {
  className?: string
}

export function DashboardNav({ className }: DashboardNavProps) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Tasks",
      href: "/tasks",
      icon: ListChecks,
    },
    {
      title: "Notifications",
      href: "/notifications",
      icon: Bell,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <nav className={cn("flex flex-col space-y-1", className)}>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          className={cn("flex justify-start gap-2 hover:bg-muted", pathname === item.href && "bg-muted")}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
