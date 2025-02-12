import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/db";

// Validate JWT_SECRET

const SECRET = process.env.JWT_SECRET
  ? process.env.JWT_SECRET
  : "floral-secret";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // hash password

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });

    return NextResponse.json({ message: "success", token });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
