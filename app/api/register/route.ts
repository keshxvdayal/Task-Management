import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { hash } from "bcrypt"
import * as z from "zod"

// Schema for validation
const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate input
    const { name, email, password } = userSchema.parse(body)

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: "User with this email already exists" }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    // Return success response without the password
    const { password: _, ...userWithoutPassword } = user
    return new NextResponse(
      JSON.stringify({ message: "User created successfully", user: userWithoutPassword }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(
        JSON.stringify({ message: error.errors[0].message }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    console.error("Error in registration:", error)
    return new NextResponse(
      JSON.stringify({ message: "An unexpected error occurred" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
