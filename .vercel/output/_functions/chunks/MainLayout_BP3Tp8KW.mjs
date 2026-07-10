import { c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, b as createAstro, e as renderHead, r as renderComponent, f as renderSlot } from './astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from './supabase_BQgYTxfM.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(["", '<nav class="bg-white shadow-md sticky top-0 z-50"> <div class="container mx-auto px-4 md:px-6"> <div class="flex items-center justify-between h-16 md:h-20"> <!-- Logo --> <a href="/" class="text-xl md:text-2xl font-bold text-blue-600"> KKA RADAR </a> <!-- Menu Desktop --> <div class="hidden md:flex items-center gap-6 lg:gap-8"> <a href="/"', '>\nBeranda\n</a> <a href="/tentang"', '>\nTentang\n</a> <a href="/blog"', '>\nBlog\n</a> <a href="/kontak"', `>
Kontak
</a> <!-- Tombol Cek Status --> <a href="/cek-status" class="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-xl transition text-sm">
Cek Status
</a> <!-- Tombol Daftar --> <a href="/daftar" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition text-sm">
Daftar
</a> </div> <!-- Mobile Menu Toggle --> <button id="menu-toggle" class="md:hidden text-slate-700 hover:text-blue-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden pb-4 border-t border-gray-100"> <div class="flex flex-col gap-3 pt-4"> <a href="/" class="hover:text-blue-600 transition text-slate-700">Beranda</a> <a href="/tentang" class="hover:text-blue-600 transition text-slate-700">Tentang</a> <a href="/blog" class="hover:text-blue-600 transition text-slate-700">Blog</a> <a href="/kontak" class="hover:text-blue-600 transition text-slate-700">Kontak</a> <a href="/cek-status" class="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-xl transition text-center">
Cek Status
</a> <a href="/daftar" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition text-center">
Daftar
</a> </div> </div> </div> </nav> <script>
  const toggleBtn = document.querySelector('#menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }
<\/script>`])), maybeRenderHead(), addAttribute([
    "hover:text-blue-600 transition",
    currentPath === "/" ? "text-blue-600 font-semibold" : "text-slate-700"
  ], "class:list"), addAttribute([
    "hover:text-blue-600 transition",
    currentPath === "/tentang" ? "text-blue-600 font-semibold" : "text-slate-700"
  ], "class:list"), addAttribute([
    "hover:text-blue-600 transition",
    currentPath.startsWith("/blog") ? "text-blue-600 font-semibold" : "text-slate-700"
  ], "class:list"), addAttribute([
    "hover:text-blue-600 transition",
    currentPath === "/kontak" ? "text-blue-600 font-semibold" : "text-slate-700"
  ], "class:list"));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/Navbar.astro", void 0);

async function getFooter() {
  const { data, error } = await supabase.from("footer").select("*").order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const footer = await getFooter();
  const activeFooter = footer.filter((item) => item.is_active).sort((a, b) => a.sort_order - b.sort_order);
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-900 text-white py-8 md:py-12"> <div class="container mx-auto px-4 md:px-6"> <div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"> <div class="text-center md:text-left"> <h3 class="text-lg md:text-xl font-bold">KKA RADAR KEDIRI</h3> <p class="text-sm text-slate-400 mt-1">Kompetisi Kompetensi Akademik 2026</p> </div> <div class="flex flex-wrap justify-center gap-3 md:gap-4"> ${activeFooter.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} target="_blank" rel="noopener noreferrer" class="bg-slate-800 hover:bg-blue-600 px-3 md:px-4 py-2 rounded-lg transition text-sm md:text-base"${addAttribute(item.description || item.title, "title")}> ${item.title} </a>`)} </div> </div> <div class="border-t border-slate-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center"> <p class="text-sm text-slate-400">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} KKA Radar Kediri. All rights reserved.
</p> </div> </div> </footer>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/Footer.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${Astro2.props.title || "KKA 2026"}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
