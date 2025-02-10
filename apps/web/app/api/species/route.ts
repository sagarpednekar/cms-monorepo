import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
  const data = await client.species.findMany({});

  return NextResponse.json({
    result: data,
    summary: "List fo FLowers species",
  });
}
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await client.species.create({
      data: body,
    });
    return NextResponse.json({ message: "success", body });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
