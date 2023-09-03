import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const contract = c.router({
  getUser: {
    method: "POST",
    path: "/api/user/get",
    responses: {
      200: z.object({
        id: z.number(),
        name: z.string(),
        picture: z.string(),
        email: z.string(),
        isManager: z.number(),
      }),
    },
    body: z.object({
      name: z.string(),
      picture: z.string(),
      email: z.string(),
    }),
    summary: "Check database to see if a user exits",
  },
  addUser: {
    method: "POST",
    path: "/api/user/add",
    responses: {
      200: z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        picture: z.string(),
        isManager: z.number(),
      }),
    },
    body: z.object({
      name: z.string(),
      email: z.string(),
      picture: z.string(),
    }),
    summary: "Add a user to the database",
  },
});
