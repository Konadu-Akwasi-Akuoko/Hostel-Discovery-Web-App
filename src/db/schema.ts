import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  index,
  primaryKey,
  int,
  varchar,
  tinyint,
  float,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const comments = mysqlTable(
  "comments",
  {
    id: int("id").autoincrement().notNull(),
    content: varchar("content", { length: 255 }),
    userId: int("userId").notNull(),
    roomId: int("roomId").notNull(),
  },
  (table) => {
    return {
      roomIdIdx: index("roomId_idx").on(table.roomId),
      userIdIdx: index("userId_idx").on(table.userId),
      commentsId: primaryKey(table.id),
    };
  }
);

export const hostels = mysqlTable(
  "hostels",
  {
    id: int("id").autoincrement().notNull(),
    name: varchar("name", { length: 255 }),
    pictures: varchar("pictures", { length: 255 }),
    location: varchar("location", { length: 255 }),
    feature1: tinyint("feature1"),
    feature2: tinyint("feature2"),
    about: varchar("about", { length: 255 }),
    managerId: int("managerId").notNull(),
  },
  (table) => {
    return {
      managerIdIdx: index("managerId_idx").on(table.managerId),
      hostelsId: primaryKey(table.id),
    };
  }
);

export const managers = mysqlTable(
  "managers",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("userId").notNull(),
    about: varchar("about", { length: 255 }),
    telephone: varchar("telephone", { length: 255 }),
  },
  (table) => {
    return {
      userIdIdx: index("userId_idx").on(table.userId),
      managersId: primaryKey(table.id),
    };
  }
);

export const rooms = mysqlTable(
  "rooms",
  {
    id: int("id").autoincrement().notNull(),
    name: varchar("name", { length: 255 }),
    location: varchar("location", { length: 255 }),
    pictures: varchar("pictures", { length: 255 }),
    distanceToCampus: varchar("distanceToCampus", { length: 255 }),
    haveSharedMeter: tinyint("haveSharedMeter"),
    numberOfStars: float("numberOfStars"),
    peoplePerRoom: int("peoplePerRoom"),
    haveSharedKitchen: tinyint("haveSharedKitchen"),
    haveSharedBathhouse: tinyint("haveSharedBathhouse"),
    haveSharedToilet: tinyint("haveSharedToilet"),
    about: varchar("about", { length: 255 }),
    hostelId: int("hostelId").notNull(),
    managerId: int("managerId").notNull(),
    isAvailable: tinyint("isAvailable"),
  },
  (table) => {
    return {
      hostelIdIdx: index("hostelId_idx").on(table.hostelId),
      managerIdIdx: index("managerId_idx").on(table.managerId),
      roomsId: primaryKey(table.id),
    };
  }
);

export const users = mysqlTable(
  "users",
  {
    id: int("id").autoincrement().notNull(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }),
    picture: varchar("picture", { length: 255 }),
    isManager: tinyint("isManager"),
  },
  (table) => {
    return {
      usersId: primaryKey(table.id),
    };
  }
);
