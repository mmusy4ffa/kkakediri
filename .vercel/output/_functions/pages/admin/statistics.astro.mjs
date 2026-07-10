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
const $$Statistics = createComponent(async ($$result, $$props, $$slots) => {
  const { data: stats } = await supabaseServer.from("statistics").select("*").order("sort_order", { ascending: true });
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('#stats-form');\n  const statusDiv = document.querySelector('#status-message');\n\n  form.addEventListener('submit', async function (e) {\n    e.preventDefault();\n\n    const formData = new FormData(form);\n    const entries = formData.entries();\n    const data = [];\n    let id = null;\n\n    for (const [key, value] of entries) {\n      if (key === 'id') {\n        id = value;\n      } else {\n        data.push({ key, value });\n      }\n    }\n\n    statusDiv.textContent = 'Menyimpan...';\n    statusDiv.style.color = 'blue';\n\n    try {\n      for (const item of data) {\n        const response = await fetch('/api/statistic/update', {\n          method: 'PUT',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({\n            id: Number(id),\n            key: item.key,\n            value: item.value,\n          }),\n        });\n\n        if (!response.ok) {\n          const result = await response.json();\n          throw new Error(result.error || 'Gagal update');\n        }\n      }\n\n      statusDiv.textContent = 'Berhasil diupdate!';\n      statusDiv.style.color = 'green';\n      setTimeout(() => location.reload(), 1000);\n    } catch (error) {\n      console.error('Error:', error);\n      statusDiv.textContent = 'Error: ' + error.message;\n      statusDiv.style.color = 'red';\n    }\n  });\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Statistics" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Statistics</h1> <p class="mt-2 text-slate-500">Kelola angka statistik website.</p> </div> <div class="rounded-2xl border bg-white p-6"> <form id="stats-form" class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${stats?.map((item) => renderTemplate`<div> <label class="block text-sm font-medium mb-1">${item.label}</label> <input type="text"${addAttribute(item.key, "name")}${addAttribute(item.value, "value")} class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <input type="hidden" name="id"${addAttribute(item.id, "value")}> </div>`)} <div class="md:col-span-2"> <button type="submit" class="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
Update Statistics
</button> </div> </form> <div id="status-message" class="text-sm mt-2"></div> </div> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/statistics.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/statistics.astro";
const $$url = "/admin/statistics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Statistics,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
