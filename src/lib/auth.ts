import { ssoClient } from "@better-auth/sso/client";
import { genericOAuthClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

/** Origen público donde el navegador alcanza `/api/auth` (mismo host que Astro o URL absoluta). */
function resolveAuthBaseURL(): string {
	const fromEnv = import.meta.env.PUBLIC_BETTER_AUTH_URL?.replace(/\/+$/, "");
	if (fromEnv) return fromEnv;
	if (import.meta.env.DEV) return "http://localhost:4321";
	const site = import.meta.env.SITE?.replace(/\/+$/, "");
	return site ?? "";
}

export const authClient = createAuthClient({
	baseURL: resolveAuthBaseURL(),
	plugins: [ssoClient(), genericOAuthClient()],
});
