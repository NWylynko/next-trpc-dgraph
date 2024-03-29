
import { inProduction } from "../config/inProduction";
import { getDgraphKey } from "../config/dgraphKey";
import { getDgraph } from "../config/getDgraph";

import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";


const dgraph = getDgraph();

const config: ApolloClientOptions<NormalizedCacheObject> = {
  uri: `${dgraph}/graphql`,
  cache: new InMemoryCache(),
}

const dgraphKey = getDgraphKey()

if (inProduction && dgraphKey) {
  config.headers = {
    "Dg-Auth": dgraphKey
  }
}

export const client = new ApolloClient(config);