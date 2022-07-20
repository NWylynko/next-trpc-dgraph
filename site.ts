import { getDomain } from "./config/getDomain";

export const site = {
  domain: getDomain(),
  titleTemplate: "%s • site",
  services: {
    // sentry: false, // I don't know if it will be possible to disable sentry
    plausible: false,
    firebase: false
  }
}

export type Site = typeof site;