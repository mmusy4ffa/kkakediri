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
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const { data: contactInfo } = await supabaseServer.from("contact_info").select("*").order("sort_order", { ascending: true });
  const { data: messages } = await supabaseServer.from("contacts").select("*").order("created_at", { ascending: false });
  return renderTemplate(_a || (_a = __template(["", ` <script>
  // Delete pesan
  document.querySelectorAll('.delete-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const id = this.dataset.id;
      const name = this.dataset.name;

      if (!confirm('Yakin ingin menghapus pesan dari "' + name + '"?')) {
        return;
      }

      try {
        const response = await fetch('/api/contact/delete', {
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

  // Update kontak info
  const contactForm = document.querySelector('#contact-info-form');
  const contactStatus = document.querySelector('#contact-status');

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const entries = formData.entries();
    const data = [];
    let id = null;

    for (const [key, value] of entries) {
      if (key === 'id') {
        id = value;
      } else {
        data.push({ key, value });
      }
    }

    contactStatus.textContent = 'Menyimpan...';
    contactStatus.style.color = 'blue';

    try {
      for (const item of data) {
        const response = await fetch('/api/contact-info/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: Number(id),
            key: item.key,
            value: item.value,
          }),
        });

        if (!response.ok) {
          const result = await response.json();
          throw new Error(result.error || 'Gagal update');
        }
      }

      contactStatus.textContent = 'Berhasil diupdate!';
      contactStatus.style.color = 'green';
      setTimeout(() => location.reload(), 1000);
    } catch (error) {
      console.error('Error:', error);
      contactStatus.textContent = 'Error: ' + error.message;
      contactStatus.style.color = 'red';
    }
  });
<\/script>`])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Kontak" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Kontak</h1> <p class="mt-2 text-slate-500">Kelola informasi kontak dan pesan masuk.</p> </div>  <div class="mb-8 rounded-2xl border bg-white p-6"> <h2 class="text-xl font-bold mb-4">Informasi Kontak</h2> <form id="contact-info-form" class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${contactInfo?.map((item) => renderTemplate`<div> <label class="block text-sm font-medium mb-1">${item.label || item.key}</label> <input type="text"${addAttribute(item.key, "name")}${addAttribute(item.value, "value")} class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <input type="hidden" name="id"${addAttribute(item.id, "value")}> </div>`)} <div class="md:col-span-2"> <button type="submit" class="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
Update Kontak
</button> </div> </form> <div id="contact-status" class="text-sm mt-2"></div> </div>  <div class="overflow-hidden rounded-2xl border bg-white"> <div class="p-4 border-b"> <h2 class="text-xl font-bold">Pesan Masuk</h2> </div> <table class="w-full"> <thead class="bg-slate-50"> <tr> <th class="p-4 text-left">Status</th> <th class="p-4 text-left">Nama</th> <th class="p-4 text-left">Email</th> <th class="p-4 text-left">Subjek</th> <th class="p-4 text-left">Tanggal</th> <th class="p-4 text-left">Aksi</th> </tr> </thead> <tbody> ${messages?.map((item) => renderTemplate`<tr class="border-t"> <td class="p-4"> ${item.is_read ? renderTemplate`<span class="rounded-full bg-green-100 px-3 py-1 text-green-700 text-xs">
Dibaca
</span>` : renderTemplate`<span class="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700 text-xs">
Belum Dibaca
</span>`} </td> <td class="p-4 font-semibold">${item.name}</td> <td class="p-4">${item.email}</td> <td class="p-4 max-w-xs truncate">${item.subject || "-"}</td> <td class="p-4 text-sm"> ${new Date(item.created_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })} </td> <td class="p-4"> <div class="flex gap-3"> <a${addAttribute(`/admin/contact/${item.id}`, "href")} class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 text-sm">
Detail
</a> <button${addAttribute(item.id, "data-id")}${addAttribute(item.name, "data-name")} class="delete-btn rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 text-sm">
Hapus
</button> </div> </td> </tr>`)} </tbody> </table> ${messages?.length === 0 && renderTemplate`<div class="p-8 text-center text-slate-500">Belum ada pesan masuk.</div>`} </div> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/contact.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/contact.astro";
const $$url = "/admin/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
