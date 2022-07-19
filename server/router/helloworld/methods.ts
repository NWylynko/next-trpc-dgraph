import { createMethods } from "../createMethods";
import { getSdk } from "./methods.generated";

export const getMethods = createMethods(getSdk);