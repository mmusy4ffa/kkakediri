import { c as createComponent, a as renderTemplate, r as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BP3Tp8KW.mjs';
import { s as supabase } from '../chunks/supabase_BQgYTxfM.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$StatusPendaftaran = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StatusPendaftaran;
  const email = Astro2.url.searchParams.get("email") || "";
  let pendaftar = null;
  if (email) {
    const { data } = await supabase.from("pendaftar").select("*").eq("email", email).order("created_at", { ascending: false }).limit(1).single();
    pendaftar = data;
  }
  return renderTemplate(_a || (_a = __template(["", ` <script>
  const form = document.querySelector('#upload-bukti-form');
  const statusDiv = document.querySelector('#upload-status');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const id = this.querySelector('input[name="id"]').value;
      const fileInput = document.querySelector('#bukti_bayar');
      const file = fileInput?.files[0];

      if (!file) {
        alert('Pilih file bukti pembayaran');
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

        statusDiv.textContent = 'Upload berhasil!';
        statusDiv.style.color = 'green';
        alert('Bukti pembayaran berhasil diupload!');
        location.reload();

      } catch (error) {
        console.error('Error:', error);
        statusDiv.textContent = 'Error: ' + error.message;
        statusDiv.style.color = 'red';
        alert('Gagal: ' + error.message);
      }
    });
  }
<\/script>`])), renderComponent($$result, "Layout", $$MainLayout, { "title": "Status Pendaftaran" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="container mx-auto px-4 md:px-6 max-w-2xl"> <div class="text-center mb-8 md:mb-12"> <h1 class="text-3xl md:text-4xl font-bold">Status Pendaftaran</h1> <p class="mt-2 text-slate-500">Cek status pendaftaran Anda</p> </div> ${pendaftar ? renderTemplate`<div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"> <div class="space-y-4"> <div class="flex justify-between items-center pb-4 border-b"> <span class="text-slate-500">Nama</span> <span class="font-semibold">${pendaftar.nama}</span> </div> <div class="flex justify-between items-center pb-4 border-b"> <span class="text-slate-500">Email</span> <span class="font-semibold">${pendaftar.email}</span> </div> <div class="flex justify-between items-center pb-4 border-b"> <span class="text-slate-500">Jenjang</span> <span class="font-semibold">${pendaftar.jenjang}</span> </div> <div class="flex justify-between items-center pb-4 border-b"> <span class="text-slate-500">Region</span> <span class="font-semibold">${pendaftar.region}</span> </div> <div class="flex justify-between items-center pb-4 border-b"> <span class="text-slate-500">Status</span> <span class="font-semibold"> ${pendaftar.status_admin === "approved" ? renderTemplate`<span class="text-green-600">✅ Dikonfirmasi</span>` : pendaftar.status_admin === "rejected" ? renderTemplate`<span class="text-red-600">❌ Ditolak</span>` : renderTemplate`<span class="text-yellow-600">⏳ Menunggu Konfirmasi</span>`} </span> </div> <!-- Upload Bukti Bayar --> ${pendaftar.status_admin !== "approved" && renderTemplate`<div class="pt-4 border-t"> <h3 class="font-bold mb-3">Upload Bukti Pembayaran</h3> <form id="upload-bukti-form" class="space-y-3"> <input type="hidden" name="id"${addAttribute(pendaftar.id, "value")}> <input id="bukti_bayar" name="bukti_bayar" type="file" accept="image/*" required class="w-full rounded-xl border border-gray-300 px-4 py-3"> <div id="upload-status" class="text-sm text-gray-500"></div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition">
Upload Bukti
</button> </form> </div>`} ${pendaftar.bukti_bayar && renderTemplate`<div class="pt-4 border-t"> <h3 class="font-bold mb-2">Bukti Pembayaran</h3> <a${addAttribute(pendaftar.bukti_bayar, "href")} target="_blank" class="text-blue-600 hover:underline">
Lihat Bukti
</a> </div>`} ${pendaftar.catatan_admin && renderTemplate`<div class="pt-4 border-t"> <h3 class="font-bold mb-2">Catatan Admin</h3> <p class="text-slate-600">${pendaftar.catatan_admin}</p> </div>`} </div> </div>` : renderTemplate`<div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center"> <p class="text-slate-500">Data pendaftaran tidak ditemukan.</p> <a href="/daftar" class="mt-4 inline-block text-blue-600 hover:underline">Daftar Sekarang</a> </div>`} </div> </section> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/status-pendaftaran.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/status-pendaftaran.astro";
const $$url = "/status-pendaftaran";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StatusPendaftaran,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
