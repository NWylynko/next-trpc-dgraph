import { inProduction } from "./inProduction";

export const getDgraphKey = (): string | undefined => {
  if (!inProduction)
    return undefined;

  const dgraphKey = inProduction
    ? process.env.DGRAPH_API_KEY
    : undefined;

  if (inProduction && !dgraphKey) {
    throw new Error(`env DGRAPH_API is undefined`);
  }

  return dgraphKey;
};
