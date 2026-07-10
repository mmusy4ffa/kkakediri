import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_BE5YHlp9.mjs';
import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  const { data: contacts } = await supabaseServer.from("contacts").select("id");
  return contacts?.map((item) => ({
    params: { id: String(item.id) }
  })) || [];
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: message } = await supabaseServer.from("contacts").select("*").eq("id", Number(id)).single();
  if (message && !message.is_read) {
    await supabaseServer.from("contacts").update({ is_read: true }).eq("id", Number(id));
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Detail Pesan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Detail Pesan</h1> </div> ${message ? renderTemplate`<div class="rounded-2xl border bg-white p-6 md:p-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"> <div> <label class="text-sm text-slate-500">Nama</label> <p class="font-semibold">${message.name}</p> </div> <div> <label class="text-sm text-slate-500">Email</label> <p class="font-semibold">${message.email}</p> </div> <div> <label class="text-sm text-slate-500">Telepon</label> <p class="font-semibold">${message.phone || "-"}</p> </div> <div> <label class="text-sm text-slate-500">Status</label> <p class="font-semibold"> ${message.is_read ? renderTemplate`<span class="rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm">
Dibaca
</span>` : renderTemplate`<span class="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700 text-sm">
Belum Dibaca
</span>`} </p> </div> <div class="md:col-span-2"> <label class="text-sm text-slate-500">Subjek</label> <p class="font-semibold">${message.subject || "-"}</p> </div> <div class="md:col-span-2"> <label class="text-sm text-slate-500">Pesan</label> <p class="mt-2 text-slate-700 leading-relaxed whitespace-pre-wrap bg-slate-50 p-4 rounded-xl"> ${message.message} </p> </div> <div class="md:col-span-2"> <label class="text-sm text-slate-500">Dikirim pada</label> <p class="font-semibold"> ${new Date(message.created_at).toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })} </p> </div> </div> <div class="flex gap-3 mt-6 pt-6 border-t"> <a${addAttribute(`mailto:${message.email}`, "href")} class="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
Balas Email
</a> <a href="/admin/contact" class="rounded-xl bg-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-400">
Kembali
</a> </div> </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-slate-500">Pesan tidak ditemukan.</p> <a href="/admin/contact" class="mt-4 inline-block text-blue-600 hover:underline">
Kembali
</a> </div>`}` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/contact/[id].astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/contact/[id].astro";
const $$url = "/admin/contact/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
