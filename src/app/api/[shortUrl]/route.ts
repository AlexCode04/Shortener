import { NextResponse } from "next/server";
import SingletonPrismaClient from "@/Singleton/SinglentonPrismaClient";

export async function GET(req: Request) {
  const prisma = SingletonPrismaClient.getInstance();

  try {
    const urlPathname = new URL(req.url).pathname;
    const shortUrl = urlPathname.split("/").pop(); 

    if (!shortUrl) {
      return NextResponse.json(
        { error: "Short URL is required" },
        { status: 400 }
      );
    }

    const link = await prisma.link.findUnique({
      where: {
        shortUrl,
      },
    });

    if (!link) {
      return NextResponse.json(
        { error: "Link not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ url: link.url });
  } catch (error) {
    console.error("Error fetching link:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
