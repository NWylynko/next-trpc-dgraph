import { t } from "../trpc";
import { z } from "zod";
import { methods } from "./methods";

export const helloRouter = t.router({
  me: t.procedure
    .input(z.object({
      name: z.string()
    }))
    .query(async ({ input }) => {
      return { hello: input.name }
    }),
  id: t.procedure
    .input(z.object({
      id: z.string()
    }))
    .query(async ({ input }) => {
      const result = await methods.getUser({ userId: input.id })
      return result.getUser;
    })
});