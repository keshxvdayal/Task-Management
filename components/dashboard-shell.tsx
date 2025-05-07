import type React from "react"
interface DashboardShellProps {
  children?: React.ReactNode
  className?: string
}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className="flex-1 space-y-4 p-4 pt-0 md:p-8 md:pt-0" {...props}>
      {children}
    </div>
  )
}
