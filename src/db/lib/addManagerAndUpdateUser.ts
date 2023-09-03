import { db } from "../config";
import { users } from "@/db/schema";
import { managers } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function addManager({
  userId,
  about,
  telephone,
}: {
  userId: number;
  about: string;
  telephone: string;
}) {
  // Add to manager
  const insertIntoManager = await db.insert(managers).values({
    userId: userId,
    about: about,
    telephone: telephone,
  });
  // Update user
  const updateUser = await db
    .update(users)
    .set({ isManager: 1 })
    .where(eq(users.id, userId));

  if (updateUser.rowsAffected > 0 && insertIntoManager.rowsAffected > 0) {
    // Return the insertId which is the managerId
    return insertIntoManager.insertId;
  } else {
    console.log(insertIntoManager);
    return false;
  }
}
