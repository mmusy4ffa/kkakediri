import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_BE5YHlp9.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('#footer-form');\n\n  form.addEventListener('submit', async function (e) {\n    e.preventDefault();\n\n    const title = document.querySelector('#title').value;\n    const description = document.querySelector('#description').value || '';\n    const link = document.querySelector('#link').value;\n    const sort_order = Number(document.querySelector('#sort').value);\n    const is_active = document.querySelector('#is_active').value === 'true';\n\n    if (!title || !link) {\n      alert('Title dan link wajib diisi');\n      return;\n    }\n\n    try {\n      const response = await fetch('/api/footer/create', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          title,\n          description,\n          link,\n          sort_order: sort_order || 1,\n          is_active,\n        }),\n      });\n\n      const result = await response.json();\n\n      if (!response.ok) {\n        throw new Error(result.error || 'Gagal menyimpan');\n      }\n\n      alert('Berhasil ditambahkan!');\n      window.location.href = '/admin/footer';\n    } catch (error) {\n      console.error('Error:', error);\n      alert('Gagal: ' + error.message);\n    }\n  });\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Tambah Footer" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Tambah Footer</h1> </div> <form id="footer-form" class="grid gap-8 lg:grid-cols-3"> <div class="space-y-6 lg:col-span-2"> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Title</label> <input id="title" name="title" placeholder="Instagram" class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Deskripsi (Opsional)</label> <input id="description" name="description" placeholder="Ikuti kami di Instagram" class="w-full rounded-xl border px-4 py-3"> </div> </div> <div class="space-y-6"> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Link URL</label> <input id="link" name="link" placeholder="https://..." class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Urutan</label> <input id="sort" name="sort_order" type="number" value="1" class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Status</label> <select id="is_active" name="is_active" class="w-full rounded-xl border px-4 py-3"> <option value="true">Aktif</option> <option value="false">Nonaktif</option> </select> </div> <button type="submit" class="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
Simpan
</button> </div> </form> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/footer/create.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/footer/create.astro";
const $$url = "/admin/footer/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Create,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
