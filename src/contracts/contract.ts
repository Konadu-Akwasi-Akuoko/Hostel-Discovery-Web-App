import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const contract = c.router({
  getUser: {
    method: "POST",
    path: "/user",
    responses: {},
    body: z.object({
      name: z.string(),
      picture: z.string(),
      email: z.string(),
    }),
    summary: "Check database to see if a user exits",
  },
});
