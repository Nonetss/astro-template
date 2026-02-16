import { createAuthClient } from 'better-auth/react';
import { genericOAuthClient } from 'better-auth/client/plugins';

const baseURL = import.meta.env.PUBLIC_BETTER_AUTH_URL || '';

export const authClient = createAuthClient({
  baseURL,
  plugins: [genericOAuthClient()],
});
