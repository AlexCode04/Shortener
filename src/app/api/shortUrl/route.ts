import { NextResponse } from "next/server";
import SingletonPrismaClient from "@/Singleton/SinglentonPrismaClient";

export async function POST(req: Request) {
  const prisma = SingletonPrismaClient.getInstance();

  const body = await req.json();
  const { url } = body;

  if (!url) {
    return NextResponse.json(
      { error: "Url is required" },
      { status: 400 }
    );
  }

  try {
    const existingLink = await prisma.link.findUnique({
      where: { url },
    });

    if (existingLink) {
      return NextResponse.json({ url: existingLink.url, shortUrl: existingLink.shortUrl }, { status: 200 });
    }

    const shortUrl = Math.random().toString(36).substring(2, 7);

    const data = await prisma.link.create({
      data: {
        url,
        shortUrl,
      },
    });

    return NextResponse.json({ url: data.url, shortUrl: data.shortUrl }, { status: 201 });
  } catch (error) {
    console.error("Error creating or fetching link:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
