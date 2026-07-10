import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_BE5YHlp9.mjs';
import { s as supabaseServer } from '../../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Kolektif = createComponent(async ($$result, $$props, $$slots) => {
  const { data: items, error } = await supabaseServer.from("registrations").select("*").order("sort_order", { ascending: true });
  return renderTemplate(_a || (_a = __template(["", ` <script>
  document.querySelectorAll('.delete-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const id = this.dataset.id;
      const title = this.dataset.title;

      if (!confirm('Yakin ingin menghapus "' + title + '"?')) {
        return;
      }

      try {
        const response = await fetch('/api/registration/delete', {
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
<\/script>`])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Pendaftaran Kolektif" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8 flex items-center justify-between"> <div> <h1 class="text-3xl font-bold">Pendaftaran Kolektif</h1> <p class="mt-2 text-slate-500">Kelola halaman pendaftaran kolektif (sekolah/instansi).</p> </div> <a href="/admin/registration/kolektif/create" class="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
Tambah
</a> </div> <div class="overflow-hidden rounded-2xl border bg-white"> <table class="w-full"> <thead class="bg-slate-50"> <tr> <th class="p-4 text-left">Gambar</th> <th class="p-4 text-left">Title</th> <th class="p-4 text-left">Urutan</th> <th class="p-4 text-left">Status</th> <th class="p-4 text-left">Aksi</th> </tr> </thead> <tbody> ${items?.map((item) => renderTemplate`<tr class="border-t"> <td class="p-4"> ${item.image ? renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-20 h-16 object-cover rounded-lg">` : renderTemplate`<div class="w-20 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
No
</div>`} </td> <td class="p-4 font-semibold">${item.title}</td> <td class="p-4">${item.sort_order}</td> <td class="p-4"> ${item.is_active ? renderTemplate`<span class="rounded-full bg-green-100 px-3 py-1 text-green-700">Aktif</span>` : renderTemplate`<span class="rounded-full bg-red-100 px-3 py-1 text-red-700">Nonaktif</span>`} </td> <td class="p-4"> <div class="flex gap-3"> <a${addAttribute(`/admin/registration/kolektif/edit/${item.id}`, "href")} class="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
Edit
</a> <button${addAttribute(item.id, "data-id")}${addAttribute(item.title, "data-title")} class="delete-btn rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
Hapus
</button> </div> </td> </tr>`)} </tbody> </table> ${items?.length === 0 && renderTemplate`<div class="p-8 text-center text-slate-500">Belum ada data pendaftaran kolektif.</div>`} </div> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/registration/kolektif.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/registration/kolektif.astro";
const $$url = "/admin/registration/kolektif";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kolektif,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
