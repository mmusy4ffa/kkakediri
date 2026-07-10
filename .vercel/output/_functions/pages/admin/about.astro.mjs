import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BE5YHlp9.mjs';
import { s as supabaseServer } from '../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const { data: about, error } = await supabaseServer.from("about").select("*").order("sort_order", { ascending: true });
  return renderTemplate(_a || (_a = __template(["", ` <script>
  document.querySelectorAll('.delete-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const id = this.dataset.id;
      const title = this.dataset.title;

      if (!confirm('Yakin ingin menghapus "' + title + '"?')) {
        return;
      }

      try {
        const response = await fetch('/api/about/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: Number(id) }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Gagal menghapus');
        }

        alert('Berhasil dihapus!');
        location.reload();
      } catch (error) {
        console.error('Error:', error);
        alert('Gagal menghapus: ' + error.message);
      }
    });
  });
<\/script>`])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Tentang KKA" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8 flex items-center justify-between"> <div> <h1 class="text-3xl font-bold">Tentang KKA</h1> <p class="mt-2 text-slate-500">Kelola konten halaman tentang KKA.</p> </div> <a href="/admin/about/create" class="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
Tambah
</a> </div> <div class="overflow-hidden rounded-2xl border bg-white"> <table class="w-full"> <thead class="bg-slate-50"> <tr> <th class="p-4 text-left">Judul</th> <th class="p-4 text-left">Deskripsi</th> <th class="p-4 text-left">Urutan</th> <th class="p-4 text-left">Status</th> <th class="p-4 text-left">Aksi</th> </tr> </thead> <tbody> ${about?.map((item) => renderTemplate`<tr class="border-t"> <td class="p-4 font-semibold">${item.title}</td> <td class="p-4 max-w-xs truncate">${item.description}</td> <td class="p-4">${item.sort_order}</td> <td class="p-4"> ${item.is_active ? renderTemplate`<span class="rounded-full bg-green-100 px-3 py-1 text-green-700">Aktif</span>` : renderTemplate`<span class="rounded-full bg-red-100 px-3 py-1 text-red-700">Nonaktif</span>`} </td> <td class="p-4"> <div class="flex gap-3"> <a${addAttribute(`/admin/about/edit/${item.id}`, "href")} class="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
Edit
</a> <button${addAttribute(item.id, "data-id")}${addAttribute(item.title, "data-title")} class="delete-btn rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
Hapus
</button> </div> </td> </tr>`)} </tbody> </table> ${about?.length === 0 && renderTemplate`<div class="p-8 text-center text-slate-500">Belum ada data tentang KKA.</div>`} </div> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/about.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/about.astro";
const $$url = "/admin/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
