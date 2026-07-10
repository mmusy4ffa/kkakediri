import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const PUT = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, title, subtitle, button_text, button_link, image, sort_order, is_active } = body;
    if (!id) {
      return new Response(JSON.stringify({ error: "ID hero wajib diisi" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const updateData = {};
    if (title !== void 0) updateData.title = title;
    if (subtitle !== void 0) updateData.subtitle = subtitle;
    if (button_text !== void 0) updateData.button_text = button_text;
    if (button_link !== void 0) updateData.button_link = button_link;
    if (image !== void 0) updateData.image = image;
    if (sort_order !== void 0) updateData.sort_order = sort_order;
    if (is_active !== void 0) updateData.is_active = is_active;
    const { data, error } = await supabaseServer.from("hero_slider").update(updateData).eq("id", Number(id)).select();
    if (error) {
      console.error("Update error:", error);
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
    console.error("Update error:", error);
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
