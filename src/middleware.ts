import { auth } from '@/lib/auth';
import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers,
  });

  if (isAuthed) {
    context.locals.user = isAuthed.user;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  const isLoginPage = context.url.pathname === '/login';
  if (!isAuthed && !isLoginPage) {
    return Response.redirect(new URL('/login', context.url.origin));
  }

  return next();
});
