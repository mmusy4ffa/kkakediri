import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../../renderers.mjs';

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz1C9ilNrSsJaCAKpxltmVMIGzBjAUD92b8iZn5PLQ8U6f8Qq3Q-5pIOBXw_fzdCuZO/exec";
const prerender = false;
const PUT = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, status } = body;
    const { data, error } = await supabaseServer.from("pendaftar").update({
      status_admin: status || "approved",
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", id).select().single();
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (data && status === "approved") {
      try {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
      } catch (fetchError) {
        console.error("Gagal kirim ke Google Sheets:", fetchError);
      }
    }
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Approve error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
