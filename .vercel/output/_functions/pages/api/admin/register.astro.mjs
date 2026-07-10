import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { username, password } = body;
    if (!username || !password) {
      return new Response(JSON.stringify({ error: "Username dan password wajib diisi" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (password.length < 6) {
      return new Response(JSON.stringify({ error: "Password minimal 6 karakter" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { data: existing, error: checkError } = await supabaseServer.from("admins").select("username").eq("username", username).maybeSingle();
    if (existing) {
      return new Response(JSON.stringify({ error: "Username sudah terdaftar" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const { data, error } = await supabaseServer.from("admins").insert({
      username,
      password: hashedPassword
    }).select();
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true, message: "Admin berhasil dibuat" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Register error:", error);
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
