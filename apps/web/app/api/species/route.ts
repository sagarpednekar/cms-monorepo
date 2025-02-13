import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/db";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const query = {};

    if (id) {
      const data = await prisma.species.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      const data1 = { ...data, verseNumber: String(data?.verseNumber) };

      return NextResponse.json({
        result: data1,
        summary: "List fo FLowers species",
      });
    }
    const data = await prisma.species.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({
      result: data,
      summary: "List fo FLowers species",
    });
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error instanceof PrismaClientValidationError) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: "error", error: errorMessage });
  }
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

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    body.id = Number(body.id);

    await prisma.species.update({
      where: {
        id: Number(body.id),
      },
      data: body,
    });
    return NextResponse.json({ message: "success", body });
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error instanceof PrismaClientValidationError) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: "error", error: errorMessage });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const id = Number(body.id);

    await prisma.species.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "success", body });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
