import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete('admin_session', { path: '/' });
  cookies.delete('admin_username', { path: '/' });
  return redirect('/admin/login');
};
