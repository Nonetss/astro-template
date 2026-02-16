import { createAuthClient } from 'better-auth/react';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { betterAuth } from 'better-auth';
import db from '@/lib/db';
import { genericOAuth } from 'better-auth/plugins/generic-oauth';
import { genericOAuthClient } from 'better-auth/client/plugins';

const baseURL = process.env.BETTER_AUTH_URL || '';

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || '',
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ['keycloak'],
    },
  },
  user: {
    additionalFields: {
      groups: {
        type: 'string[]',
        required: true,
      },
      username: {
        type: 'string',
        required: true,
      },
    },
  },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: 'keycloak',
          clientId: process.env.SSO_CLIENT_ID || '',
          clientSecret: process.env.SSO_CLIENT_SECRET || '',
          discoveryUrl: process.env.SSO_DISCOVERY_URL || '',
          scopes: ['openid', 'profile', 'email'],
          pkce: true,
          overrideUserInfo: true,
          mapProfileToUser: async (profile) => {
            console.log(JSON.stringify(profile, null, 2));
            return {
              id: profile.sub,
              email: profile.email,
              name: profile.name,
              image: profile.picture,
              groups: profile.groups,
              username: profile.preferred_username,
            };
          },
        },
      ],
    }),
  ],
});

export const authClient = createAuthClient({
  baseURL,
  plugins: [genericOAuthClient()],
});
