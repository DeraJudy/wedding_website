import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import Message from "@/lib/models/Messages";

export async function GET() {
  try {
    await connectDB();

    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const newMessage = await Message.create({
      name,
      message,
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
