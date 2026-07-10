import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BP3Tp8KW.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Halaman Tidak Ditemukan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 md:py-32"> <div class="container mx-auto px-4 md:px-6 text-center max-w-2xl"> <h1 class="text-6xl md:text-8xl font-bold text-blue-600">404</h1> <h2 class="text-2xl md:text-3xl font-bold mt-4">Halaman Tidak Ditemukan</h2> <p class="text-slate-500 mt-4 text-lg">
Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8"> <a href="/" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition">
Kembali ke Beranda
</a> <a href="/kontak" class="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-xl transition">
Hubungi Kami
</a> </div> </div> </section> ` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/404.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
