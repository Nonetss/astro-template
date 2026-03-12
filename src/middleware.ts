import { auth } from '@/lib/auth';
import { defineMiddleware } from 'astro/middleware';
import type { userInfo } from '@/lib/auth-client';

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await auth.api.getSession({
    headers: context.request.headers,
  });

  if (session) {
    context.locals.user = session.user as userInfo;
    context.locals.session = session.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  const isPublicRoute =
    context.url.pathname === '/login' ||
    context.url.pathname.startsWith('/api/auth/');
  if (!session && !isPublicRoute) {
    return Response.redirect(new URL('/login', context.url.origin));
  }

  return next();
});
