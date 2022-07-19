import { getSdkApollo } from "../../lib/getSdkApollo";
import { client } from "../client";

export const createMethods = getSdkApollo(client)