import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const PUT = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, title, slug, content, excerpt, image, author, is_active } = body;
    if (!id) {
      return new Response(JSON.stringify({ error: "ID wajib diisi" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const updateData = {
      title,
      slug,
      content,
      excerpt: excerpt || "",
      image: image || "",
      author: author || "Admin",
      is_active: is_active ?? true
    };
    const { data, error } = await supabaseServer.from("blogs").update(updateData).eq("id", Number(id)).select();
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Update blog error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Internal server error"
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
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
