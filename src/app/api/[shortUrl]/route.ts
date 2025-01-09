import { NextResponse } from "next/server";
import SingletonPrismaClient from "@/Singleton/SinglentonPrismaClient";

export async function GET(req: Request, { params }: { params: { shortUrl: string } }) {
  const prisma = SingletonPrismaClient.getInstance(); 

  const { shortUrl } = params;

  try {
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
