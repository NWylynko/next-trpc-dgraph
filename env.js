const { loadEnvConfig } = require("@next/env")

loadEnvConfig(".")

console.log('DGRAPH_API:', process.env.DGRAPH_API)