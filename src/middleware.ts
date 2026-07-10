import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = context.url.pathname;

  console.log('Path:', url);
  console.log('Session:', context.cookies.get('admin_session')?.value);

  if (url === '/admin/login') {
    return next();
  }

  if (url.startsWith('/admin')) {
    const session = context.cookies.get('admin_session');

    if (!session || session.value !== 'true') {
      console.log('Redirect ke login karena session tidak valid');
      return Response.redirect(new URL('/admin/login', context.url));
    }
  }

  return next();
});
