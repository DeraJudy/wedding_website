// import { ConnectDB } from "@/lib/config/db";
// import User from "@/lib/models/User";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await ConnectDB();
//     const users = await User.find({}, "-password"); // exclude passwords
//     return NextResponse.json({ users });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }