import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: Request) {
    
    const prisma = new PrismaClient();

    const body = await req.json();
    const { url } = body;
    
    if (!url) {
        return NextResponse.json(
        { error: "Url is required" },
        { status: 400 }
        );
    }

    const shortUrl =  Math.random().toString(36).substring(2, 7);

    try{

        const data = await prisma.link.create({
            data: {
                url,
                shortUrl,
            }
        });

        return NextResponse.json({ url, shortUrl }, { status: 201 });
    
    }catch{
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    };
}