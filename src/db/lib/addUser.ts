import { db } from "@/db/config";
import { users } from "@/db/schema";

export default async function addUser(
  name: string,
  picture: string,
  email: string
): Promise<User | boolean> {
  try {
    const result = await db
      .insert(users)
      .values({
        name: name,
        email: email,
        picture: picture,
        isManager: 0, // assuming isManager is 0 or false for new users
      })
      .execute();

    if (result.rowsAffected > 0) {
    //   console.log(result);
      return {
        id: Number(result.insertId),
        name: name,
        email: email,
        picture: picture,
        isManager: 0,
      };
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}
