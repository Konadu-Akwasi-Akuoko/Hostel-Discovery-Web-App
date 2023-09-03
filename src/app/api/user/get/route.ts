import getUser from "@/db/lib/getUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: Pick<User, "name" | "email" | "picture"> = await request.json();
    const { name, email, picture } = data;
    const res = await getUser(name, email, picture);
    // console.log(res);
    // console.log(data)
    return NextResponse.json(res);
  } catch (e) {
    return NextResponse.json("There was an error: " + e);
  }
}
