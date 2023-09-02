import { db } from "@/db/config";
import { users } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export default async function getUser(
  name: string,
  picture: string,
  email: string
): Promise<User | false> {
  try {
    const result = await db
      .select()
      .from(users)
      .where(
        and(
          eq(users.name, name),
          eq(users.picture, picture),
          eq(users.email, email)
        )
      );
    if (result.length > 0) {
      return result[0];
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
}
