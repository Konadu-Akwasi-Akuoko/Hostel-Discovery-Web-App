import addManager from "@/db/lib/addManagerAndUpdateUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: { userId: number; about: string; telephone: string } =
      await request.json();
    const { userId, about, telephone } = data;
    const res = await addManager({
      userId: userId,
      about: about,
      telephone: telephone,
    });
    // The next response will return the managerId or false if it fails
    if (res) {
      return NextResponse.json(res);
    } else {
      return NextResponse.json(false);
    }
  } catch (e) {
    return NextResponse.json("There was an error: " + e);
  }
}
