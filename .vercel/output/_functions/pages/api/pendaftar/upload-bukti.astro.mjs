import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const file = formData.get("bukti_bayar");
    if (!id || !file || !(file instanceof File)) {
      return new Response(JSON.stringify({ error: "ID dan file wajib diisi" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ext = file.name.split(".").pop();
    const filename = `bukti_${Date.now()}.${ext}`;
    const { error: uploadError } = await supabaseServer.storage.from("bukti").upload(filename, file);
    if (uploadError) {
      return new Response(JSON.stringify({ error: uploadError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { data } = supabaseServer.storage.from("bukti").getPublicUrl(filename);
    const { error: updateError } = await supabaseServer.from("pendaftar").update({
      bukti_bayar: data.publicUrl,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", Number(id));
    if (updateError) {
      return new Response(JSON.stringify({ error: updateError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true, url: data.publicUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Upload bukti error:", error);
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
