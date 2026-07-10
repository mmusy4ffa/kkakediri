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
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const { data: settings } = await supabaseServer.from("settings").select("*").order("id", { ascending: true });
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('#settings-form');\n  const status = document.querySelector('#status-message');\n\n  if (form) {\n    form.addEventListener('submit', async function (e) {\n      e.preventDefault();\n\n      const formData = new FormData(form);\n      const data = {};\n\n      for (const [key, value] of formData.entries()) {\n        if (key) {\n          data[key] = value;\n        }\n      }\n\n      status.textContent = 'Menyimpan...';\n      status.style.color = 'blue';\n\n      try {\n        const response = await fetch('/api/settings/update', {\n          method: 'PUT',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify(data),\n        });\n\n        const result = await response.json();\n\n        if (!response.ok) {\n          throw new Error(result.error || 'Gagal menyimpan');\n        }\n\n        status.textContent = 'Pengaturan berhasil disimpan!';\n        status.style.color = 'green';\n        setTimeout(() => location.reload(), 1500);\n      } catch (error) {\n        console.error('Error:', error);\n        status.textContent = 'Error: ' + error.message;\n        status.style.color = 'red';\n      }\n    });\n  }\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Pengaturan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Pengaturan</h1> <p class="mt-2 text-slate-500">Kelola biaya pendaftaran dan rekening tujuan.</p> </div> <div class="rounded-2xl border bg-white p-6"> <form id="settings-form" class="space-y-6"> ${settings && settings.length > 0 ? settings.map((item, index) => renderTemplate`<div> <label class="block text-sm font-medium mb-1">${item.label}</label> <input type="text"${addAttribute(item.key || "", "name")}${addAttribute(item.value || "", "value")} class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div>`) : renderTemplate`<p class="text-slate-500">Belum ada pengaturan. Silakan tambahkan di database.</p>`} <div id="status-message" class="text-sm"></div> <button type="submit" class="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition">
Simpan Pengaturan
</button> </form> </div> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/settings.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/settings.astro";
const $$url = "/admin/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
