import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import Message from "@/lib/models/Messages";

// GET all messages
export async function GET() {
  await connectDB();

  const messages = await Message.find({})
    .sort({ createdAt: -1 })
    .lean();

  // ✅ ALWAYS return an array
  return NextResponse.json(messages);
}

// POST a new message
export async function POST(req) {
  await connectDB();

  const { name, message } = await req.json();

  if (!name || !message) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  const newMessage = await Message.create({
    name,
    message,
  });

  return NextResponse.json(newMessage, { status: 201 });
}
