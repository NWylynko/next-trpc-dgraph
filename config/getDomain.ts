import { inProduction } from "./inProduction";

export const getDomain = (): string => {
  const domain = inProduction
    ? process.env.NEXT_APP_DOMAIN
    : 'http://localhost:3000';

  if (!domain) {
    throw new Error(`env NEXT_APP_DOMAIN is undefined`);
  }

  return domain;
};
