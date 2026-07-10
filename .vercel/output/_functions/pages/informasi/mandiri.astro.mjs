import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BP3Tp8KW.mjs';
import { s as supabase } from '../../chunks/supabase_BQgYTxfM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Mandiri = createComponent(async ($$result, $$props, $$slots) => {
  const { data: items } = await supabase.from("registrations").select("*").eq("is_active", true).order("sort_order", { ascending: true });
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Pendaftaran Mandiri" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="container mx-auto px-4 md:px-6 max-w-4xl"> <div class="text-center mb-10 md:mb-16"> <h1 class="text-3xl md:text-4xl font-bold">Pendaftaran Mandiri</h1> <p class="mt-2 text-slate-500">Daftar secara individu melalui website</p> </div> ${items?.map((item) => renderTemplate`<div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-8 last:mb-0"> ${item.image && renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-48 md:h-64 object-cover">`} <div class="p-6 md:p-8 lg:p-10"> <h2 class="text-2xl md:text-3xl font-bold mb-2">${item.title}</h2> ${item.description && renderTemplate`<p class="text-slate-500 mb-4">${item.description}</p>`} <div class="text-slate-700 leading-relaxed whitespace-pre-wrap">${item.content}</div> </div> </div>`)} ${items?.length === 0 && renderTemplate`<div class="text-center py-12"> <p class="text-slate-500">Informasi pendaftaran mandiri belum tersedia.</p> </div>`} </div> </section> ` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/informasi/mandiri.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/informasi/mandiri.astro";
const $$url = "/informasi/mandiri";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mandiri,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
