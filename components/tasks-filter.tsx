"use client"

import type React from "react"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState, useTransition } from "react"
import { SearchIcon, X } from "lucide-react"

export function TasksFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [status, setStatus] = useState(searchParams.get("status") || "")
  const [priority, setPriority] = useState(searchParams.get("priority") || "")
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [sort, setSort] = useState(searchParams.get("sort") || "dueDate-asc")

  // Debounce search query
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      startTransition(() => {
        if (query) {
          updateFilters({ q: query })
        } else {
          removeFilter("q")
        }
      })
    }, 300)

    return () => clearTimeout(timeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const updateFilters = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    router.push(`${pathname}?${params.toString()}`)
  }

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(key)
    router.push(`${pathname}?${params.toString()}`)
  }

  const resetFilters = () => {
    router.push(pathname)
    setStatus("")
    setPriority("")
    setQuery("")
    setSort("dueDate-asc")
  }

  const handleStatusChange = (value: string) => {
    setStatus(value)
    if (value) {
      updateFilters({ status: value })
    } else {
      removeFilter("status")
    }
  }

  const handlePriorityChange = (value: string) => {
    setPriority(value)
    if (value) {
      updateFilters({ priority: value })
    } else {
      removeFilter("priority")
    }
  }

  const handleSortChange = (value: string) => {
    setSort(value)
    updateFilters({ sort: value })
  }

  const hasFilters = status || priority || query || sort !== "dueDate-asc"

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-2 items-end">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Search</Label>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tasks..."
              className="pl-8"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Status</Label>
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All statuses</SelectItem>
              <SelectItem value="TODO">To Do</SelectItem>
              <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
              <SelectItem value="REVIEW">Review</SelectItem>
              <SelectItem value="COMPLETED">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Priority</Label>
          <Select value={priority} onValueChange={handlePriorityChange}>
            <SelectTrigger>
              <SelectValue placeholder="All priorities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All priorities</SelectItem>
              <SelectItem value="LOW">Low</SelectItem>
              <SelectItem value="MEDIUM">Medium</SelectItem>
              <SelectItem value="HIGH">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Sort</Label>
          <Select value={sort} onValueChange={handleSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dueDate-asc">Due Date (Ascending)</SelectItem>
              <SelectItem value="dueDate-desc">Due Date (Descending)</SelectItem>
              <SelectItem value="title-asc">Title (A-Z)</SelectItem>
              <SelectItem value="title-desc">Title (Z-A)</SelectItem>
              <SelectItem value="priority-desc">Priority (High-Low)</SelectItem>
              <SelectItem value="priority-asc">Priority (Low-High)</SelectItem>
              <SelectItem value="updatedAt-desc">Last Updated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {hasFilters && (
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={resetFilters}>
            <X className="mr-2 h-4 w-4" />
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </div>
  )
}
