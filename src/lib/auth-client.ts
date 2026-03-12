import { createAuthClient } from 'better-auth/react';
import { genericOAuthClient } from 'better-auth/client/plugins';
import type { User } from 'better-auth';

export interface userInfo extends User {
  groups: string[];
  username: string;
}

const baseURL = import.meta.env.PUBLIC_BETTER_AUTH_URL || '';

export const authClient = createAuthClient({
  baseURL,
  plugins: [genericOAuthClient()],
});
