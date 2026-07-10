import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BP3Tp8KW.mjs';
import { g as getAbout } from '../chunks/about_LK8FQ0rG.mjs';
export { renderers } from '../renderers.mjs';

const $$Tentang = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getAbout();
  const activeAbout = about.filter((item) => item.is_active).sort((a, b) => a.sort_order - b.sort_order);
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Tentang KKA 2026" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 md:py-16 lg:py-20"> <div class="container mx-auto px-4 md:px-6 max-w-4xl"> <div class="text-center mb-10 md:mb-16"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">Tentang KKA 2026</h1> <div class="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div> </div> ${activeAbout.map((item) => renderTemplate`<div class="mb-8 md:mb-12 last:mb-0"> ${item.id === activeAbout[0]?.id ? renderTemplate`<div class="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100"> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed md:leading-8 break-words"> ${item.description} </p> </div>` : renderTemplate`<div class="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100"> ${item.image && renderTemplate`<div class="flex justify-center mb-4 md:mb-6 flex-shrink-0"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="h-16 w-16 md:h-20 md:w-20 object-contain"> </div>`} <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center break-words"> ${item.title} </h2> <p class="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed md:leading-8 break-words"> ${item.description} </p> </div>`} </div>`)} ${activeAbout.length === 0 && renderTemplate`<div class="text-center py-12"> <p class="text-slate-500 text-lg">Belum ada data tentang KKA.</p> </div>`} <div class="text-center mt-10 md:mt-16"> <a href="/" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-xl transition text-sm md:text-base">
Kembali ke Beranda
</a> </div> </div> </section> ` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/tentang.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/tentang.astro";
const $$url = "/tentang";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tentang,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
