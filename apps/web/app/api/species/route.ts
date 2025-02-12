import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/db";

export async function GET() {
  const data = await prisma.species.findMany({});

  return NextResponse.json({
    result: data,
    summary: "List fo FLowers species",
  });
}
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await prisma.species.create({
      data: body,
    });
    return NextResponse.json({ message: "success", body });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
