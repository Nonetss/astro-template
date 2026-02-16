import { auth } from '@/lib/auth';
import { defineMiddleware } from 'astro/middleware';
import type { userInfo } from '@/lib/auth-client';

export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers,
  });

  if (isAuthed) {
    context.locals.user = isAuthed.user as userInfo;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  const isPublicRoute =
    context.url.pathname === '/login' ||
    context.url.pathname.startsWith('/api/auth/');
  if (!isAuthed && !isPublicRoute) {
    return Response.redirect(new URL('/login', context.url.origin));
  }

  return next();
});
