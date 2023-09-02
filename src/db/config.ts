import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

export const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

const conn = connect(config);
export const db = drizzle(conn);
