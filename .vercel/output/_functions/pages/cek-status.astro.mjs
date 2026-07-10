import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BP3Tp8KW.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CekStatus = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script>
  const form = document.querySelector('#cek-status-form');
  const statusDiv = document.querySelector('#status-message');
  const resultContainer = document.querySelector('#result-container');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const search = document.querySelector('#search').value.trim();

    if (!search) {
      alert('Masukkan email atau nomor invoice');
      return;
    }

    statusDiv.textContent = 'Mencari data...';
    statusDiv.style.color = 'blue';
    resultContainer.innerHTML = '';
    resultContainer.classList.add('hidden');

    try {
      const response = await fetch(
        '/api/pendaftar/cek-status?search=' + encodeURIComponent(search)
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Data tidak ditemukan');
      }

      const data = result.data;

      let statusText = '';
      let statusColor = '';

      if (data.status_admin === 'approved') {
        statusText = 'Dikonfirmasi';
        statusColor = 'text-green-600';
      } else if (data.status_admin === 'rejected') {
        statusText = 'Ditolak';
        statusColor = 'text-red-600';
      } else if (data.bukti_bayar) {
        statusText = 'Menunggu Verifikasi Admin';
        statusColor = 'text-yellow-600';
      } else {
        statusText = 'Menunggu Upload Bukti';
        statusColor = 'text-yellow-600';
      }

      resultContainer.innerHTML = \`
        <div class="mt-6 pt-6 border-t">
          <h3 class="font-bold text-lg mb-4">Detail Pendaftaran</h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-slate-500">Invoice</span>
              <span class="font-semibold">\${data.invoice_number || '-'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Nama</span>
              <span class="font-semibold">\${data.nama}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Email</span>
              <span class="font-semibold">\${data.email}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Jenjang</span>
              <span class="font-semibold">\${data.jenjang}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Region</span>
              <span class="font-semibold">\${data.region}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Status</span>
              <span class="font-semibold \${statusColor}">\${statusText}</span>
            </div>
            \${
              data.catatan_admin
                ? \`
              <div class="flex justify-between">
                <span class="text-slate-500">Catatan Admin</span>
                <span class="text-red-600">\${data.catatan_admin}</span>
              </div>
            \`
                : ''
            }
            \${
              data.bukti_bayar
                ? \`
              <div class="flex justify-between">
                <span class="text-slate-500">Bukti Transfer</span>
                <a href="\${data.bukti_bayar}" target="_blank" class="text-blue-600 hover:underline">Lihat</a>
              </div>
            \`
                : ''
            }
            <div class="flex justify-between">
              <span class="text-slate-500">Tanggal Daftar</span>
              <span class="font-semibold">\${new Date(data.created_at).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}</span>
            </div>
          </div>
          \${
            data.status_admin !== 'approved' && data.status_admin !== 'rejected'
              ? \`
            <div class="mt-4 pt-4 border-t text-center">
              <a href="/invoice?id=\${data.id}" class="text-blue-600 hover:underline">
                Upload Bukti Transfer \u2192
              </a>
            </div>
          \`
              : ''
          }
        </div>
      \`;

      resultContainer.classList.remove('hidden');
      statusDiv.textContent = 'Data ditemukan!';
      statusDiv.style.color = 'green';
    } catch (error) {
      console.error('Error:', error);
      statusDiv.textContent = 'Error: ' + error.message;
      statusDiv.style.color = 'red';
      resultContainer.innerHTML = '';
      resultContainer.classList.add('hidden');
    }
  });
<\/script>`], ["", ` <script>
  const form = document.querySelector('#cek-status-form');
  const statusDiv = document.querySelector('#status-message');
  const resultContainer = document.querySelector('#result-container');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const search = document.querySelector('#search').value.trim();

    if (!search) {
      alert('Masukkan email atau nomor invoice');
      return;
    }

    statusDiv.textContent = 'Mencari data...';
    statusDiv.style.color = 'blue';
    resultContainer.innerHTML = '';
    resultContainer.classList.add('hidden');

    try {
      const response = await fetch(
        '/api/pendaftar/cek-status?search=' + encodeURIComponent(search)
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Data tidak ditemukan');
      }

      const data = result.data;

      let statusText = '';
      let statusColor = '';

      if (data.status_admin === 'approved') {
        statusText = 'Dikonfirmasi';
        statusColor = 'text-green-600';
      } else if (data.status_admin === 'rejected') {
        statusText = 'Ditolak';
        statusColor = 'text-red-600';
      } else if (data.bukti_bayar) {
        statusText = 'Menunggu Verifikasi Admin';
        statusColor = 'text-yellow-600';
      } else {
        statusText = 'Menunggu Upload Bukti';
        statusColor = 'text-yellow-600';
      }

      resultContainer.innerHTML = \\\`
        <div class="mt-6 pt-6 border-t">
          <h3 class="font-bold text-lg mb-4">Detail Pendaftaran</h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-slate-500">Invoice</span>
              <span class="font-semibold">\\\${data.invoice_number || '-'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Nama</span>
              <span class="font-semibold">\\\${data.nama}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Email</span>
              <span class="font-semibold">\\\${data.email}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Jenjang</span>
              <span class="font-semibold">\\\${data.jenjang}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Region</span>
              <span class="font-semibold">\\\${data.region}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Status</span>
              <span class="font-semibold \\\${statusColor}">\\\${statusText}</span>
            </div>
            \\\${
              data.catatan_admin
                ? \\\`
              <div class="flex justify-between">
                <span class="text-slate-500">Catatan Admin</span>
                <span class="text-red-600">\\\${data.catatan_admin}</span>
              </div>
            \\\`
                : ''
            }
            \\\${
              data.bukti_bayar
                ? \\\`
              <div class="flex justify-between">
                <span class="text-slate-500">Bukti Transfer</span>
                <a href="\\\${data.bukti_bayar}" target="_blank" class="text-blue-600 hover:underline">Lihat</a>
              </div>
            \\\`
                : ''
            }
            <div class="flex justify-between">
              <span class="text-slate-500">Tanggal Daftar</span>
              <span class="font-semibold">\\\${new Date(data.created_at).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}</span>
            </div>
          </div>
          \\\${
            data.status_admin !== 'approved' && data.status_admin !== 'rejected'
              ? \\\`
            <div class="mt-4 pt-4 border-t text-center">
              <a href="/invoice?id=\\\${data.id}" class="text-blue-600 hover:underline">
                Upload Bukti Transfer \u2192
              </a>
            </div>
          \\\`
              : ''
          }
        </div>
      \\\`;

      resultContainer.classList.remove('hidden');
      statusDiv.textContent = 'Data ditemukan!';
      statusDiv.style.color = 'green';
    } catch (error) {
      console.error('Error:', error);
      statusDiv.textContent = 'Error: ' + error.message;
      statusDiv.style.color = 'red';
      resultContainer.innerHTML = '';
      resultContainer.classList.add('hidden');
    }
  });
<\/script>`])), renderComponent($$result, "Layout", $$MainLayout, { "title": "Cek Status Pendaftaran" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="container mx-auto px-4 md:px-6 max-w-2xl"> <div class="text-center mb-8 md:mb-12"> <h1 class="text-3xl md:text-4xl font-bold">Cek Status Pendaftaran</h1> <p class="mt-2 text-slate-500">Masukkan email atau nomor invoice untuk cek status</p> </div> <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"> <form id="cek-status-form" class="space-y-4"> <div> <label class="block text-sm font-medium mb-1">Email atau Nomor Invoice</label> <input id="search" name="search" type="text" placeholder="Masukkan email atau invoice (contoh: KKA2026-0001)" required class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div id="status-message" class="text-sm text-gray-500"></div> <div id="result-container" class="hidden"></div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-base">
Cek Status
</button> </form> </div> </div> </section> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/cek-status.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/cek-status.astro";
const $$url = "/cek-status";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CekStatus,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
