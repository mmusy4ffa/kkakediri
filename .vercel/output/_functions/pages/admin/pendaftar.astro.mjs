import { c as createComponent, a as renderTemplate, r as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BE5YHlp9.mjs';
import { s as supabaseServer } from '../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Pendaftar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pendaftar;
  const statusFilter = Astro2.url.searchParams.get("status") || "all";
  let query = supabaseServer.from("pendaftar").select("*").order("created_at", { ascending: false });
  if (statusFilter !== "all") {
    query = query.eq("status_admin", statusFilter);
  }
  const { data: pendaftar, error } = await query;
  return renderTemplate(_a || (_a = __template(["", ` <script>
  document.querySelectorAll('.approve-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const id = this.dataset.id;
      if (!confirm('Konfirmasi pendaftar ini?')) return;

      try {
        const response = await fetch('/api/pendaftar/approve', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: Number(id), status: 'approved' }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error);
        alert('Berhasil dikonfirmasi.');
        location.reload();
      } catch (error) {
        alert('Gagal: ' + error.message);
      }
    });
  });

  document.querySelectorAll('.reject-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const id = this.dataset.id;
      const reason = prompt('Alasan penolakan (opsional):');

      try {
        const response = await fetch('/api/pendaftar/reject', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: Number(id), status: 'rejected', catatan: reason || '' }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error);
        alert('Berhasil ditolak.');
        location.reload();
      } catch (error) {
        alert('Gagal: ' + error.message);
      }
    });
  });

  document.querySelectorAll('.delete-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const id = this.dataset.id;
      const nama = this.dataset.nama;

      if (!confirm('Yakin ingin menghapus pendaftar "' + nama + '"?')) return;

      try {
        const response = await fetch('/api/pendaftar/delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: Number(id) }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error);
        alert('Berhasil dihapus.');
        location.reload();
      } catch (error) {
        alert('Gagal: ' + error.message);
      }
    });
  });
<\/script>`])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Pendaftar" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8 flex items-center justify-between flex-wrap gap-4"> <div> <h1 class="text-3xl font-bold">Data Pendaftar</h1> <p class="mt-2 text-slate-500">Total: ${pendaftar?.length || 0} pendaftar</p> </div> <div class="flex gap-3 flex-wrap"> <a href="/admin/pendaftar?status=all" class="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-xl transition text-sm">
Semua
</a> <a href="/admin/pendaftar?status=pending" class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-xl transition text-sm">
Pending
</a> <a href="/admin/pendaftar?status=approved" class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl transition text-sm">
Approved
</a> <a href="/admin/pendaftar?status=rejected" class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl transition text-sm">
Rejected
</a> <a href="/api/pendaftar/export" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition text-sm">
Export
</a> </div> </div> <div class="overflow-hidden rounded-2xl border bg-white"> <div class="overflow-x-auto"> <table class="w-full min-w-[1300px]"> <thead class="bg-slate-50"> <tr> <th class="p-4 text-left">Invoice</th> <th class="p-4 text-left">Nama</th> <th class="p-4 text-left">Email</th> <th class="p-4 text-left">Sekolah</th> <th class="p-4 text-left">Jenjang</th> <th class="p-4 text-left">Biaya</th> <th class="p-4 text-left">Status</th> <th class="p-4 text-left">Bukti</th> <th class="p-4 text-left">Aksi</th> </tr> </thead> <tbody> ${pendaftar?.map((item) => renderTemplate`<tr class="border-t"> <td class="p-4 font-mono text-sm font-bold">${item.invoice_number || "-"}</td> <td class="p-4 font-semibold">${item.nama}</td> <td class="p-4">${item.email}</td> <td class="p-4 max-w-xs truncate">${item.asal_sekolah}</td> <td class="p-4">${item.jenjang}</td> <td class="p-4 font-semibold text-blue-600">
Rp ${item.biaya?.toLocaleString("id-ID") || "0"} </td> <td class="p-4"> ${item.status_admin === "approved" ? renderTemplate`<span class="rounded-full bg-green-100 px-3 py-1 text-green-700 text-xs">
Approved
</span>` : item.status_admin === "rejected" ? renderTemplate`<span class="rounded-full bg-red-100 px-3 py-1 text-red-700 text-xs">
Rejected
</span>` : item.bukti_bayar ? renderTemplate`<span class="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700 text-xs">
Verifikasi
</span>` : renderTemplate`<span class="rounded-full bg-gray-100 px-3 py-1 text-gray-700 text-xs">
No Bukti
</span>`} </td> <td class="p-4"> ${item.bukti_bayar ? renderTemplate`<a${addAttribute(item.bukti_bayar, "href")} target="_blank" class="text-blue-600 hover:underline text-sm">
Lihat
</a>` : renderTemplate`<span class="text-gray-400 text-sm">-</span>`} </td> <td class="p-4"> <div class="flex gap-2 flex-wrap"> ${item.bukti_bayar && item.status_admin !== "approved" && renderTemplate`<button${addAttribute(item.id, "data-id")} class="approve-btn bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm">
Approve
</button>`} ${item.status_admin !== "rejected" && renderTemplate`<button${addAttribute(item.id, "data-id")} class="reject-btn bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm">
Reject
</button>`} <button${addAttribute(item.id, "data-id")}${addAttribute(item.nama, "data-nama")} class="delete-btn bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm">
Hapus
</button> </div> </td> </tr>`)} </tbody> </table> </div> ${pendaftar?.length === 0 && renderTemplate`<div class="p-8 text-center text-slate-500">Belum ada pendaftar.</div>`} </div> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/pendaftar.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/pendaftar.astro";
const $$url = "/admin/pendaftar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pendaftar,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
