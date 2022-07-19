
const domain = process.env.NEXT_APP_DOMAIN

if (!domain) {
  throw new Error(`NEXT_APP_DOMAIN is not defined in environment`)
}

export const site = {
  domain,
  titleTemplate: "%s • site"
}

export type Site = typeof site;