import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_BE5YHlp9.mjs';
import { g as getHeroes } from '../../../chunks/hero_DKd2EtUL.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const heroes = await getHeroes();
  return renderTemplate(_a || (_a = __template(["", " <script>\n  document.querySelectorAll('.delete-btn').forEach((btn) => {\n    btn.addEventListener('click', async function () {\n      const id = this.dataset.id;\n      const title = this.dataset.title;\n\n      if (!confirm(`Yakin ingin menghapus hero \"${title}\"?`)) {\n        return;\n      }\n\n      try {\n        const response = await fetch('/api/hero/delete', {\n          method: 'DELETE',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({ id: Number(id) }),\n        });\n\n        const result = await response.json();\n\n        if (!response.ok) {\n          throw new Error(result.error || 'Gagal menghapus');\n        }\n\n        alert('Hero berhasil dihapus!');\n        location.reload();\n      } catch (error) {\n        console.error('Error:', error);\n        alert('Gagal menghapus: ' + error.message);\n      }\n    });\n  });\n<\/script>"], ["", " <script>\n  document.querySelectorAll('.delete-btn').forEach((btn) => {\n    btn.addEventListener('click', async function () {\n      const id = this.dataset.id;\n      const title = this.dataset.title;\n\n      if (!confirm(\\`Yakin ingin menghapus hero \"\\${title}\"?\\`)) {\n        return;\n      }\n\n      try {\n        const response = await fetch('/api/hero/delete', {\n          method: 'DELETE',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({ id: Number(id) }),\n        });\n\n        const result = await response.json();\n\n        if (!response.ok) {\n          throw new Error(result.error || 'Gagal menghapus');\n        }\n\n        alert('Hero berhasil dihapus!');\n        location.reload();\n      } catch (error) {\n        console.error('Error:', error);\n        alert('Gagal menghapus: ' + error.message);\n      }\n    });\n  });\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Hero Slider" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8 flex items-center justify-between"> <div> <h1 class="text-3xl font-bold">Hero Slider</h1> <p class="mt-2 text-slate-500">Kelola slider homepage.</p> </div> <a href="/admin/website/hero/create" class="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
+ Tambah Hero
</a> </div> <div class="overflow-hidden rounded-2xl border bg-white"> <table class="w-full"> <thead class="bg-slate-50"> <tr> <th class="p-4 text-left">Gambar</th> <th class="p-4 text-left">Judul</th> <th class="p-4 text-left">Status</th> <th class="p-4 text-left">Urutan</th> <th class="p-4 text-left">Aksi</th> </tr> </thead> <tbody> ${heroes.map((hero) => renderTemplate`<tr class="border-t"> <td class="p-4"> <img${addAttribute(hero.image, "src")} class="h-20 w-36 rounded-lg object-cover"> </td> <td class="p-4"> <div class="font-semibold">${hero.title}</div> <div class="text-sm text-slate-500">${hero.subtitle}</div> </td> <td class="p-4"> ${hero.is_active ? renderTemplate`<span class="rounded-full bg-green-100 px-3 py-1 text-green-700">Aktif</span>` : renderTemplate`<span class="rounded-full bg-red-100 px-3 py-1 text-red-700">Nonaktif</span>`} </td> <td class="p-4">${hero.sort_order}</td> <td class="p-4"> <div class="flex gap-3"> <a${addAttribute(`/admin/website/hero/edit/${hero.id}`, "href")} class="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
Edit
</a> <button${addAttribute(hero.id, "data-id")}${addAttribute(hero.title, "data-title")} class="delete-btn rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
Hapus
</button> </div> </td> </tr>`)} </tbody> </table> </div> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/website/hero/index.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/website/hero/index.astro";
const $$url = "/admin/website/hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
