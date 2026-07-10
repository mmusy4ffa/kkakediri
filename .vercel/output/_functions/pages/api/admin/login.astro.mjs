import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { username, password } = body;
    if (!username || !password) {
      return new Response(JSON.stringify({ error: "Username dan password wajib diisi" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { data: admin, error } = await supabaseServer.from("admins").select("*").eq("username", username).single();
    if (error || !admin) {
      return new Response(JSON.stringify({ error: "Username atau password salah" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Username atau password salah" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    cookies.set("admin_session", "true", {
      path: "/",
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7
    });
    return new Response(JSON.stringify({ success: true, username }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
