import { d as defineMiddleware, s as sequence } from './chunks/render-context_DyTDrjKV.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CBKDbp4u.mjs';
import 'kleur/colors';
import './chunks/astro/server_Bavjlja2.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const url = context.url.pathname;
  console.log("Path:", url);
  console.log("Session:", context.cookies.get("admin_session")?.value);
  if (url === "/admin/login") {
    return next();
  }
  if (url.startsWith("/admin")) {
    const session = context.cookies.get("admin_session");
    if (!session || session.value !== "true") {
      console.log("Redirect ke login karena session tidak valid");
      return Response.redirect(new URL("/admin/login", context.url));
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
