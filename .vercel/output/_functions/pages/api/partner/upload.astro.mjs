import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("image");
    if (!file || !(file instanceof File)) {
      return new Response(JSON.stringify({ error: "File tidak valid" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ext = file.name.split(".").pop();
    const filename = `partner_${Date.now()}.${ext}`;
    const { error: uploadError } = await supabaseServer.storage.from("partner").upload(filename, file);
    if (uploadError) {
      console.error("Upload error:", uploadError);
      return new Response(JSON.stringify({ error: uploadError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { data } = supabaseServer.storage.from("partner").getPublicUrl(filename);
    return new Response(JSON.stringify({ success: true, url: data.publicUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
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
