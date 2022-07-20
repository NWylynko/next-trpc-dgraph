import { t } from "../trpc";
import { z } from "zod";
import { getMethods } from "./methods";

export const helloRouter = t.router({
  me: t.procedure
    .input(z.object({
      name: z.string()
    }))
    .query(async ({ input }) => {
      return { hello: input.name }
    })
});