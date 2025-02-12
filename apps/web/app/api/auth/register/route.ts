import argon2 from "argon2";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name = "" } = await req.json();

    console.log({ email, password, name });

    // hash password

    const hashedPassword = await argon2.hash(password);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
