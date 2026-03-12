// / <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_BETTER_AUTH_URL: string;
}

declare namespace App {
  // Note: 'import {} from ""' syntax does not work in .d.ts files.
  interface Locals {
    user: import('@/lib/auth-client').userInfo | null;
    session: import('better-auth').Session | null;
  }
}
