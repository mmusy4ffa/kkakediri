import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../../../chunks/AdminLayout_BE5YHlp9.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Tentang KKA" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Tentang KKA</h1> <p class="mt-2 text-slate-500">Kelola informasi halaman Tentang Kami.</p> </div> <form class="space-y-6 rounded-2xl border border-slate-200 bg-white p-8"> <div> <label class="mb-2 block font-medium"> Judul </label> <input type="text" name="title" placeholder="Masukkan Judul" class="w-full rounded-xl border border-slate-300 px-4 py-3"> </div> <div> <label class="mb-2 block font-medium"> Deskripsi </label> <textarea rows="8" name="description" placeholder="Masukkan deskripsi..." class="w-full rounded-xl border border-slate-300 px-4 py-3"></textarea> </div> <div> <label class="mb-2 block font-medium"> Upload Gambar </label> <input type="file" name="image" class="w-full rounded-xl border border-slate-300 p-3"> </div> <button class="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
Simpan Perubahan
</button> </form> ` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/website/hero/about.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/website/hero/about.astro";
const $$url = "/admin/website/hero/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
