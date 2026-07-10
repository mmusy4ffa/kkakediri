import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_BE5YHlp9.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('#partner-form');\n  const statusDiv = document.querySelector('#upload-status');\n\n  form.addEventListener('submit', async function (e) {\n    e.preventDefault();\n\n    const name = document.querySelector('#name').value;\n    const website = document.querySelector('#website').value || '';\n    const sort_order = Number(document.querySelector('#sort').value);\n    const is_active = document.querySelector('#is_active').value === 'true';\n    const fileInput = document.querySelector('#logo');\n    const file = fileInput?.files[0];\n\n    if (!name) {\n      alert('Nama partner wajib diisi');\n      return;\n    }\n\n    let logoUrl = '';\n\n    if (file) {\n      statusDiv.textContent = 'Uploading logo...';\n      statusDiv.style.color = 'blue';\n\n      try {\n        const uploadFormData = new FormData();\n        uploadFormData.append('image', file);\n\n        const uploadRes = await fetch('/api/partner/upload', {\n          method: 'POST',\n          body: uploadFormData,\n        });\n\n        const uploadResult = await uploadRes.json();\n\n        if (!uploadRes.ok) {\n          throw new Error(uploadResult.error || 'Upload gagal');\n        }\n\n        logoUrl = uploadResult.url;\n        statusDiv.textContent = 'Upload berhasil!';\n        statusDiv.style.color = 'green';\n      } catch (error) {\n        statusDiv.textContent = 'Error: ' + error.message;\n        statusDiv.style.color = 'red';\n        alert('Gagal upload: ' + error.message);\n        return;\n      }\n    }\n\n    statusDiv.textContent = 'Menyimpan data...';\n    statusDiv.style.color = 'blue';\n\n    try {\n      const response = await fetch('/api/partner/create', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          name,\n          logo: logoUrl,\n          website,\n          sort_order: sort_order || 1,\n          is_active,\n        }),\n      });\n\n      const result = await response.json();\n\n      if (!response.ok) {\n        throw new Error(result.error || 'Gagal menyimpan');\n      }\n\n      alert('Berhasil ditambahkan!');\n      window.location.href = '/admin/partner';\n    } catch (error) {\n      console.error('Error:', error);\n      statusDiv.textContent = 'Error: ' + error.message;\n      statusDiv.style.color = 'red';\n      alert('Gagal: ' + error.message);\n    }\n  });\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Tambah Partner" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Tambah Partner</h1> </div> <form id="partner-form" class="grid gap-8 lg:grid-cols-3"> <div class="space-y-6 lg:col-span-2"> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Nama Partner</label> <input id="name" name="name" class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Website (Opsional)</label> <input id="website" name="website" placeholder="https://..." class="w-full rounded-xl border px-4 py-3"> </div> </div> <div class="space-y-6"> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Logo</label> <input id="logo" name="logo" type="file" accept="image/*" class="w-full rounded-xl border px-4 py-3"> <div id="upload-status" class="text-sm mt-2 text-gray-500"></div> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Urutan</label> <input id="sort" name="sort_order" type="number" value="1" class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Status</label> <select id="is_active" name="is_active" class="w-full rounded-xl border px-4 py-3"> <option value="true">Aktif</option> <option value="false">Nonaktif</option> </select> </div> <button type="submit" class="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
Simpan
</button> </div> </form> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/partner/create.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/partner/create.astro";
const $$url = "/admin/partner/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Create,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
