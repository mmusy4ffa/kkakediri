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
  const { data: blogs } = await supabaseServer.from("blogs").select("id");
  return blogs?.map((item) => ({
    params: { id: String(item.id) }
  })) || [];
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: item } = await supabaseServer.from("blogs").select("*").eq("id", Number(id)).single();
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('#edit-form');\n  const statusDiv = document.querySelector('#upload-status');\n  const currentUrl = window.location.pathname;\n  const id = currentUrl.split('/').pop();\n\n  form.addEventListener('submit', async function (e) {\n    e.preventDefault();\n\n    const title = document.querySelector('#title').value;\n    const slug = document.querySelector('#slug').value;\n    const content = document.querySelector('#content').value;\n    const excerpt = document.querySelector('#excerpt').value || '';\n    const author = document.querySelector('#author').value || 'Admin';\n    const is_active = document.querySelector('#is_active').value === 'true';\n    const fileInput = document.querySelector('#image');\n    const file = fileInput?.files[0];\n\n    if (!title || !slug || !content) {\n      alert('Title, slug, dan konten wajib diisi');\n      return;\n    }\n\n    let imageUrl = null;\n\n    if (file) {\n      statusDiv.textContent = 'Uploading gambar baru...';\n      statusDiv.style.color = 'blue';\n\n      try {\n        const uploadFormData = new FormData();\n        uploadFormData.append('image', file);\n\n        const uploadRes = await fetch('/api/blog/upload', {\n          method: 'POST',\n          body: uploadFormData,\n        });\n\n        const uploadResult = await uploadRes.json();\n\n        if (!uploadRes.ok) {\n          throw new Error(uploadResult.error || 'Upload gagal');\n        }\n\n        imageUrl = uploadResult.url;\n        statusDiv.textContent = 'Upload berhasil!';\n        statusDiv.style.color = 'green';\n      } catch (error) {\n        statusDiv.textContent = 'Error: ' + error.message;\n        statusDiv.style.color = 'red';\n        alert('Gagal upload: ' + error.message);\n        return;\n      }\n    }\n\n    statusDiv.textContent = 'Menyimpan perubahan...';\n    statusDiv.style.color = 'blue';\n\n    try {\n      const payload = {\n        id: Number(id),\n        title,\n        slug,\n        content,\n        excerpt,\n        author,\n        is_active,\n      };\n\n      if (imageUrl) {\n        payload.image = imageUrl;\n      }\n\n      const response = await fetch('/api/blog/update', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(payload),\n      });\n\n      const result = await response.json();\n\n      if (!response.ok) {\n        throw new Error(result.error || 'Gagal update');\n      }\n\n      alert('Berhasil diupdate!');\n      window.location.href = '/admin/blog';\n    } catch (error) {\n      console.error('Error:', error);\n      statusDiv.textContent = 'Error: ' + error.message;\n      statusDiv.style.color = 'red';\n      alert('Gagal: ' + error.message);\n    }\n  });\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Edit Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Edit Blog</h1> </div> <form id="edit-form" class="grid gap-8 lg:grid-cols-3"> <div class="space-y-6 lg:col-span-2"> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Title</label> <input id="title" name="title"${addAttribute(item?.title || "", "value")} class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Slug (URL unik)</label> <input id="slug" name="slug"${addAttribute(item?.slug || "", "value")} class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Konten</label> <textarea id="content" name="content" rows="8" class="w-full rounded-xl border px-4 py-3">${item?.content || ""}</textarea> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Excerpt (Ringkasan)</label> <textarea id="excerpt" name="excerpt" rows="3" class="w-full rounded-xl border px-4 py-3">${item?.excerpt || ""}</textarea> </div> </div> <div class="space-y-6"> <div class="rounded-2xl border bg-white p-6"> ${item?.image && renderTemplate`<div class="mb-4"> <label class="block mb-2 text-sm text-gray-500">Gambar Saat Ini</label> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-32 object-cover rounded-lg"> </div>`} <label class="block mb-2">Upload Gambar Baru (Opsional)</label> <input id="image" name="image" type="file" accept="image/*" class="w-full rounded-xl border px-4 py-3"> <div id="upload-status" class="text-sm mt-2 text-gray-500"></div> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Author</label> <input id="author" name="author"${addAttribute(item?.author || "Admin", "value")} class="w-full rounded-xl border px-4 py-3"> </div> <div class="rounded-2xl border bg-white p-6"> <label class="block mb-2">Status</label> <select id="is_active" name="is_active" class="w-full rounded-xl border px-4 py-3"> <option value="true"${addAttribute(item?.is_active === true, "selected")}>Aktif</option> <option value="false"${addAttribute(item?.is_active === false, "selected")}>Nonaktif</option> </select> </div> <div class="flex gap-3"> <a href="/admin/blog" class="w-full rounded-xl bg-gray-300 py-3 text-center text-gray-700 hover:bg-gray-400">
Batal
</a> <button type="submit" class="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
Update
</button> </div> </div> </form> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/blog/edit/[id].astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/blog/edit/[id].astro";
const $$url = "/admin/blog/edit/[id]";

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
