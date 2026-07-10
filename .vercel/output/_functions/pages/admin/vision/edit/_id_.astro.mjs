import { c as createComponent, a as renderTemplate, r as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../../../chunks/AdminLayout_BE5YHlp9.mjs';
import { s as supabaseServer } from '../../../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  const { data: visions } = await supabaseServer.from("visions").select("id");
  return visions?.map((vision) => ({
    params: { id: String(vision.id) }
  })) || [];
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: vision } = await supabaseServer.from("visions").select("*").eq("id", Number(id)).single();
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('#edit-form');\n  const statusDiv = document.createElement('div');\n  statusDiv.className = 'text-sm mt-2';\n  form?.appendChild(statusDiv);\n\n  const currentUrl = window.location.pathname;\n  const id = currentUrl.split('/').pop();\n\n  form.addEventListener('submit', async function (e) {\n    e.preventDefault();\n\n    const title = document.querySelector('#title').value;\n    const description = document.querySelector('#description').value;\n    const sort_order = Number(document.querySelector('#sort').value);\n    const is_active = document.querySelector('#is_active').value === 'true';\n\n    if (!title || !description) {\n      alert('Judul dan deskripsi wajib diisi');\n      return;\n    }\n\n    statusDiv.textContent = 'Menyimpan...';\n    statusDiv.style.color = 'blue';\n\n    try {\n      const response = await fetch('/api/vision/update', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          id: Number(id),\n          title: title,\n          description: description,\n          sort_order: sort_order || 1,\n          is_active: is_active,\n        }),\n      });\n\n      const result = await response.json();\n\n      if (!response.ok) {\n        throw new Error(result.error || 'Gagal update');\n      }\n\n      statusDiv.textContent = 'Berhasil diupdate!';\n      statusDiv.style.color = 'green';\n\n      setTimeout(function () {\n        window.location.href = '/admin/vision';\n      }, 1000);\n    } catch (error) {\n      console.error('Error:', error);\n      statusDiv.textContent = 'Error: ' + error.message;\n      statusDiv.style.color = 'red';\n      alert('Gagal: ' + error.message);\n    }\n  });\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Edit Visi Misi" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Edit Visi Misi</h1> </div> <form id="edit-form" class="grid gap-8 lg:grid-cols-3"> <div class="space-y-6 lg:col-span-2"> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Judul</label> <input id="title" name="title"${addAttribute(vision?.title || "", "value")} class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Deskripsi</label> <textarea id="description" name="description" rows="6" class="w-full rounded-xl border px-4 py-3">${vision?.description || ""}</textarea> </div> </div> <div class="space-y-6"> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Urutan</label> <input id="sort" name="sort_order" type="number"${addAttribute(vision?.sort_order || 1, "value")} class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Status</label> <select id="is_active" name="is_active" class="w-full rounded-xl border px-4 py-3"> <option value="true"${addAttribute(vision?.is_active === true, "selected")}>Aktif</option> <option value="false"${addAttribute(vision?.is_active === false, "selected")}>Nonaktif</option> </select> </div> <div class="flex gap-3"> <a href="/admin/vision" class="w-full rounded-xl bg-gray-300 py-3 text-center text-gray-700 hover:bg-gray-400">
Batal
</a> <button type="submit" class="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
Update
</button> </div> </div> </form> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/vision/edit/[id].astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/vision/edit/[id].astro";
const $$url = "/admin/vision/edit/[id]";

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
