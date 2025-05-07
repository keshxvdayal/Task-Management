import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { hash, compare } from "bcrypt"
import * as z from "zod"

// Schema for validation
const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  currentPassword: z.string().optional(),
  newPassword: z.string().min(8, "Password must be at least 8 characters").optional(),
})

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id
    const body = await req.json()

    // Validate input
    const { name, email, currentPassword, newPassword } = profileSchema.parse(body)

    // Check if email is already taken (by a different user)
    if (email !== session.user.email) {
      const existingUser = await db.user.findUnique({
        where: { email },
      })

      if (existingUser && existingUser.id !== userId) {
        return NextResponse.json({ message: "Email already in use" }, { status: 409 })
      }
    }

    // If changing password, verify current password
    if (newPassword && currentPassword) {
      const user = await db.user.findUnique({
        where: { id: userId },
        select: { password: true },
      })

      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 })
      }

      const isPasswordValid = await compare(currentPassword, user.password)

      if (!isPasswordValid) {
        return NextResponse.json({ message: "Current password is incorrect" }, { status: 400 })
      }
    }

    // Update user profile
    const updateData: any = {
      name,
      email,
    }

    if (newPassword) {
      updateData.password = await hash(newPassword, 10)
    }

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    })

    return NextResponse.json({
      message: "Profile updated successfully",
      user: updatedUser,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors[0].message }, { status: 400 })
    }

    console.error("Error updating profile:", error)
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 })
  }
}
