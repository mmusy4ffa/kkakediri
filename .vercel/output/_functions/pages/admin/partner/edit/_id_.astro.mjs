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
  const { data: partners } = await supabaseServer.from("partners").select("id");
  return partners?.map((item) => ({
    params: { id: String(item.id) }
  })) || [];
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: item } = await supabaseServer.from("partners").select("*").eq("id", Number(id)).single();
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('#edit-form');\n  const statusDiv = document.querySelector('#upload-status');\n  const currentUrl = window.location.pathname;\n  const id = currentUrl.split('/').pop();\n\n  form.addEventListener('submit', async function (e) {\n    e.preventDefault();\n\n    const name = document.querySelector('#name').value;\n    const website = document.querySelector('#website').value || '';\n    const sort_order = Number(document.querySelector('#sort').value);\n    const is_active = document.querySelector('#is_active').value === 'true';\n    const fileInput = document.querySelector('#logo');\n    const file = fileInput?.files[0];\n\n    if (!name) {\n      alert('Nama partner wajib diisi');\n      return;\n    }\n\n    let logoUrl = null;\n\n    if (file) {\n      statusDiv.textContent = 'Uploading logo baru...';\n      statusDiv.style.color = 'blue';\n\n      try {\n        const uploadFormData = new FormData();\n        uploadFormData.append('image', file);\n\n        const uploadRes = await fetch('/api/partner/upload', {\n          method: 'POST',\n          body: uploadFormData,\n        });\n\n        const uploadResult = await uploadRes.json();\n\n        if (!uploadRes.ok) {\n          throw new Error(uploadResult.error || 'Upload gagal');\n        }\n\n        logoUrl = uploadResult.url;\n        statusDiv.textContent = 'Upload berhasil!';\n        statusDiv.style.color = 'green';\n      } catch (error) {\n        statusDiv.textContent = 'Error: ' + error.message;\n        statusDiv.style.color = 'red';\n        alert('Gagal upload: ' + error.message);\n        return;\n      }\n    }\n\n    statusDiv.textContent = 'Menyimpan perubahan...';\n    statusDiv.style.color = 'blue';\n\n    try {\n      const payload = {\n        id: Number(id),\n        name,\n        website,\n        sort_order: sort_order || 1,\n        is_active,\n      };\n\n      if (logoUrl) {\n        payload.logo = logoUrl;\n      }\n\n      const response = await fetch('/api/partner/update', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(payload),\n      });\n\n      const result = await response.json();\n\n      if (!response.ok) {\n        throw new Error(result.error || 'Gagal update');\n      }\n\n      alert('Berhasil diupdate!');\n      window.location.href = '/admin/partner';\n    } catch (error) {\n      console.error('Error:', error);\n      statusDiv.textContent = 'Error: ' + error.message;\n      statusDiv.style.color = 'red';\n      alert('Gagal: ' + error.message);\n    }\n  });\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Edit Partner" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Edit Partner</h1> </div> <form id="edit-form" class="grid gap-8 lg:grid-cols-3"> <div class="space-y-6 lg:col-span-2"> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Nama Partner</label> <input id="name" name="name"${addAttribute(item?.name || "", "value")} class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Website (Opsional)</label> <input id="website" name="website"${addAttribute(item?.website || "", "value")} class="w-full rounded-xl border px-4 py-3"> </div> </div> <div class="space-y-6"> <div class="rounded-2xl border bg-white p-6"> ${item?.logo && renderTemplate`<div class="mb-4"> <label class="block mb-2 text-sm text-gray-500">Logo Saat Ini</label> <img${addAttribute(item.logo, "src")}${addAttribute(item.name, "alt")} class="w-24 h-24 object-contain"> </div>`} <label class="block mb-2">Upload Logo Baru (Opsional)</label> <input id="logo" name="logo" type="file" accept="image/*" class="w-full rounded-xl border px-4 py-3"> <div id="upload-status" class="text-sm mt-2 text-gray-500"></div> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Urutan</label> <input id="sort" name="sort_order" type="number"${addAttribute(item?.sort_order || 1, "value")} class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Status</label> <select id="is_active" name="is_active" class="w-full rounded-xl border px-4 py-3"> <option value="true"${addAttribute(item?.is_active === true, "selected")}>Aktif</option> <option value="false"${addAttribute(item?.is_active === false, "selected")}>Nonaktif</option> </select> </div> <div class="flex gap-3"> <a href="/admin/partner" class="w-full rounded-xl bg-gray-300 py-3 text-center text-gray-700 hover:bg-gray-400">
Batal
</a> <button type="submit" class="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
Update
</button> </div> </div> </form> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/partner/edit/[id].astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/partner/edit/[id].astro";
const $$url = "/admin/partner/edit/[id]";

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
