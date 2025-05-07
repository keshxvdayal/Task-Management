"use server"

import { db } from "@/lib/db"

export async function recentTasksAction(userId: string) {
  return await db.task.findMany({
    where: {
      OR: [{ assigneeId: userId }, { creatorId: userId }],
    },
    include: {
      assignee: {
        select: {
          name: true,
          image: true,
        },
      },
      creator: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 5,
  })
}
