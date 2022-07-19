import { t } from "../trpc";
import { z } from "zod";
import { getMethods } from "./methods";

export const helloRouter = t.router({
  hello: t.procedure.query(async () => {
    return { hello: "world" }
  })
});