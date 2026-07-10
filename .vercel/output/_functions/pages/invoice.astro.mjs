import { c as createComponent, a as renderTemplate, r as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BP3Tp8KW.mjs';
import { s as supabaseServer } from '../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Invoice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Invoice;
  const id = Astro2.url.searchParams.get("id") || "";
  let pendaftar = null;
  if (id && !Number.isNaN(Number(id))) {
    console.log("Mencari pendaftar dengan ID:", id);
    const { data, error } = await supabaseServer.from("pendaftar").select("*").eq("id", Number(id)).single();
    console.log("Hasil query:", { data, error });
    if (data) {
      pendaftar = data;
    } else {
      console.log("Pendaftar tidak ditemukan untuk ID:", id);
    }
  } else {
    console.log("ID tidak valid atau kosong di URL");
  }
  return renderTemplate(_a || (_a = __template(["", ` <script>
  const form = document.querySelector('#upload-bukti-form');
  const statusDiv = document.querySelector('#upload-status');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const id = this.querySelector('input[name="id"]').value;
      const fileInput = document.querySelector('#bukti_bayar');
      const file = fileInput?.files[0];

      if (!file) {
        alert('Pilih file bukti transfer');
        return;
      }

      statusDiv.textContent = 'Uploading...';
      statusDiv.style.color = 'blue';

      try {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('bukti_bayar', file);

        const response = await fetch('/api/pendaftar/upload-bukti', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Upload gagal');
        }

        statusDiv.textContent = 'Bukti transfer berhasil diupload. Menunggu verifikasi admin.';
        statusDiv.style.color = 'green';
        setTimeout(() => location.reload(), 2000);
      } catch (error) {
        console.error('Error:', error);
        statusDiv.textContent = 'Error: ' + error.message;
        statusDiv.style.color = 'red';
        alert('Gagal: ' + error.message);
      }
    });
  }
<\/script>`])), renderComponent($$result, "Layout", $$MainLayout, { "title": "Invoice Pendaftaran" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="container mx-auto px-4 md:px-6 max-w-2xl"> ${pendaftar ? renderTemplate`<div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"> <div class="bg-blue-600 text-white p-6 md:p-8"> <h1 class="text-2xl md:text-3xl font-bold">INVOICE</h1> <p class="text-blue-100 mt-1">KKA Radar Kediri 2026</p> </div> <div class="p-6 md:p-8"> <div class="flex justify-between items-start pb-4 border-b"> <div> <p class="text-sm text-slate-500">Nomor Invoice</p> <p class="font-bold text-lg">${pendaftar.invoice_number || "-"}</p> </div> <div class="text-right"> <p class="text-sm text-slate-500">Tanggal</p> <p class="font-semibold"> ${new Date(pendaftar.created_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </p> </div> </div> <div class="py-4 space-y-3"> <div class="flex justify-between"> <span class="text-slate-500">Nama</span> <span class="font-semibold">${pendaftar.nama}</span> </div> <div class="flex justify-between"> <span class="text-slate-500">Email</span> <span class="font-semibold">${pendaftar.email}</span> </div> <div class="flex justify-between"> <span class="text-slate-500">Jenjang</span> <span class="font-semibold">${pendaftar.jenjang}</span> </div> <div class="flex justify-between"> <span class="text-slate-500">Region</span> <span class="font-semibold">${pendaftar.region}</span> </div> <div class="flex justify-between"> <span class="text-slate-500">Tipe</span> <span class="font-semibold"> ${pendaftar.tipe_pendaftaran === "mandiri" ? "Mandiri" : "Kolektif"} </span> </div> </div> <div class="py-4 border-t"> <div class="flex justify-between items-center"> <span class="text-slate-500">Biaya Pendaftaran</span> <span class="font-bold text-blue-600">
Rp ${pendaftar.biaya?.toLocaleString("id-ID") || "0"} </span> </div> </div> <div class="py-4 border-t"> <p class="text-sm text-slate-500">Transfer ke rekening berikut:</p> <p class="font-bold text-lg"> ${pendaftar.rekening || "Bank BNI 1234567890 a.n. Panitia KKA"} </p> </div> <div class="py-4 border-t"> <div class="flex justify-between items-center"> <span class="text-slate-500">Status</span> <span class="font-semibold"> ${pendaftar.status_admin === "approved" ? renderTemplate`<span class="text-green-600">Dikonfirmasi</span>` : pendaftar.status_admin === "rejected" ? renderTemplate`<span class="text-red-600">Ditolak</span>` : pendaftar.bukti_bayar ? renderTemplate`<span class="text-yellow-600">Menunggu Verifikasi Admin</span>` : renderTemplate`<span class="text-yellow-600">Menunggu Upload Bukti</span>`} </span> </div> </div> ${pendaftar.catatan_admin && renderTemplate`<div class="py-4 border-t"> <p class="text-sm text-slate-500">Catatan Admin</p> <p class="text-red-600">${pendaftar.catatan_admin}</p> </div>`} ${pendaftar.status_admin !== "approved" && pendaftar.status_admin !== "rejected" && renderTemplate`<div class="mt-6 pt-6 border-t"> <h3 class="font-bold mb-3">Upload Bukti Transfer</h3> <p class="text-sm text-slate-500 mb-4">
Silakan transfer sebesar${" "} <strong>Rp ${pendaftar.biaya?.toLocaleString("id-ID") || "0"}</strong> ke
                    rekening di atas.
</p> <form id="upload-bukti-form" class="space-y-3"> <input type="hidden" name="id"${addAttribute(pendaftar.id, "value")}> <input id="bukti_bayar" name="bukti_bayar" type="file" accept="image/*" required class="w-full rounded-xl border border-gray-300 px-4 py-3"> <div id="upload-status" class="text-sm text-gray-500"></div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
Upload Bukti Transfer
</button> </form> </div>`} ${pendaftar.bukti_bayar && renderTemplate`<div class="mt-4 pt-4 border-t"> <h3 class="font-bold mb-2">Bukti Transfer</h3> <a${addAttribute(pendaftar.bukti_bayar, "href")} target="_blank" class="text-blue-600 hover:underline">
Lihat Bukti Transfer
</a> </div>`} <div class="mt-6 pt-6 border-t text-center"> <a href="/" class="text-blue-600 hover:underline">
Kembali ke Beranda
</a> </div> </div> </div>` : renderTemplate`<div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center"> <p class="text-slate-500">Data pendaftaran tidak ditemukan.</p> <a href="/daftar" class="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition">
Daftar Sekarang
</a> </div>`} </div> </section> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/invoice.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/invoice.astro";
const $$url = "/invoice";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Invoice,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
