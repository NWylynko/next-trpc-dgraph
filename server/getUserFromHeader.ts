import { TRPCError } from '@trpc/server';
import { NextApiRequest } from 'next/types';
import "../lib/initializeFirebase";
import admin from 'firebase-admin';
import { site } from '../site';
import type { Auth } from 'firebase-admin/lib/auth/auth';

let auth: Auth | undefined = undefined;

if (site.services.firebase) {
  auth = admin.auth();
}

export async function getUserFromHeader(req: NextApiRequest) {

  if (!auth) {
    return;
  }

  const jwt = req.cookies.jwt ?? req.headers['x-jwt'] as string | undefined;

  if (!jwt) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }

  const user = await auth.verifyIdToken(jwt)

  return user;
}
