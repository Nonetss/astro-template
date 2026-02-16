import { createAuthClient } from 'better-auth/react';
import { ssoClient } from '@better-auth/sso/client';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { betterAuth } from 'better-auth';
import db from '@/lib/db';

const baseURL = process.env.BETTER_AUTH_URL || '';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
});

export const authClient = createAuthClient({
  baseURL,
  plugins: [ssoClient()],
});
