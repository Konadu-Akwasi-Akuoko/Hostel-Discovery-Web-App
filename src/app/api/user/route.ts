import getUser from "@/lib/getUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: Pick<User, "name" | "email" | "picture"> = await request.json();
    const { name, email, picture } = data;
    const res = await getUser(name, email, picture);
    return NextResponse.json(res);
  } catch (e) {
    return NextResponse.json("There was an error: " + e);
  }
}
