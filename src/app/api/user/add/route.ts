import addUser from "@/db/lib/addUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: User = await request.json();
    const { name, email, picture } = data;
    // console.log(data);
    const res = await addUser(name, email, picture);
    return NextResponse.json(res);
  } catch (e) {
    return NextResponse.json("There was an error: " + e);
  }
}
