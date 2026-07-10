import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BP3Tp8KW.mjs';
import { s as supabase } from '../chunks/supabase_BQgYTxfM.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Kontak = createComponent(async ($$result, $$props, $$slots) => {
  const { data: contactInfo } = await supabase.from("contact_info").select("*").eq("is_active", true).order("sort_order", { ascending: true });
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('#contact-form');\n  const statusDiv = document.querySelector('#status-message');\n\n  form.addEventListener('submit', async function (e) {\n    e.preventDefault();\n\n    const name = document.querySelector('#name').value;\n    const email = document.querySelector('#email').value;\n    const phone = document.querySelector('#phone').value || '';\n    const subject = document.querySelector('#subject').value || '';\n    const message = document.querySelector('#message').value;\n\n    if (!name || !email || !message) {\n      alert('Nama, email, dan pesan wajib diisi');\n      return;\n    }\n\n    statusDiv.textContent = 'Mengirim pesan...';\n    statusDiv.style.color = 'blue';\n\n    try {\n      const response = await fetch('/api/contact', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          name,\n          email,\n          phone,\n          subject,\n          message,\n        }),\n      });\n\n      const result = await response.json();\n\n      if (!response.ok) {\n        throw new Error(result.error || 'Gagal mengirim pesan');\n      }\n\n      statusDiv.textContent = 'Pesan berhasil dikirim! Terima kasih.';\n      statusDiv.style.color = 'green';\n      alert('Pesan Anda berhasil dikirim!');\n      form.reset();\n    } catch (error) {\n      console.error('Error:', error);\n      statusDiv.textContent = 'Error: ' + error.message;\n      statusDiv.style.color = 'red';\n      alert('Gagal mengirim: ' + error.message);\n    }\n  });\n<\/script>"])), renderComponent($$result, "Layout", $$MainLayout, { "title": "Kontak KKA 2026" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="container mx-auto px-4 md:px-6 max-w-4xl"> <div class="text-center mb-10 md:mb-16"> <h1 class="text-3xl md:text-4xl font-bold">Kontak Kami</h1> <p class="mt-2 text-slate-500">Hubungi kami untuk informasi lebih lanjut</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"> ${contactInfo?.map((item) => {
    let icon = "\u{1F4E7}";
    if (item.key === "phone") icon = "\u{1F4DE}";
    else if (item.key === "address") icon = "\u{1F4CD}";
    else if (item.key === "email") icon = "\u{1F4E7}";
    return renderTemplate`<div class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"> <div class="text-3xl mb-3">${icon}</div> <h3 class="font-semibold">${item.label || item.key}</h3> <p class="text-sm text-slate-500 break-words">${item.value}</p> </div>`;
  })} </div> <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"> <h2 class="text-2xl font-bold mb-6">Kirim Pesan</h2> <form id="contact-form" class="space-y-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium mb-1">Nama Lengkap</label> <input id="name" name="name" type="text" required class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label class="block text-sm font-medium mb-1">Email</label> <input id="email" name="email" type="email" required class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> </div> <div> <label class="block text-sm font-medium mb-1">Telepon (Opsional)</label> <input id="phone" name="phone" type="tel" class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label class="block text-sm font-medium mb-1">Subjek</label> <input id="subject" name="subject" type="text" class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label class="block text-sm font-medium mb-1">Pesan</label> <textarea id="message" name="message" rows="5" required class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea> </div> <div id="status-message" class="text-sm text-gray-500"></div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-base">
Kirim Pesan
</button> </form> </div> </div> </section> ` }));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/kontak.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/kontak.astro";
const $$url = "/kontak";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontak,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
