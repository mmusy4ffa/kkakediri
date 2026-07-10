import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BP3Tp8KW.mjs';
import { a as getBlogs } from '../chunks/blog_CSnbB7A5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await getBlogs();
  const activeBlogs = blogs.filter((item) => item.is_active);
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-8 md:py-12 lg:py-16"> <div class="container mx-auto px-4 md:px-6 max-w-6xl"> <div class="text-center mb-8 md:mb-12 lg:mb-16"> <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">Blog</h1> <p class="mt-2 text-sm md:text-base text-slate-500">
Berita dan informasi terbaru tentang KKA
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"> ${activeBlogs.map((item) => renderTemplate`<a${addAttribute(`/blog/${item.slug}`, "href")} class="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100 group"> ${item.image ? renderTemplate`<div class="w-full overflow-hidden"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition duration-300"> </div>` : renderTemplate`<div class="w-full h-40 sm:h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
No Image
</div>`} <div class="p-4 sm:p-5 md:p-6"> <div class="text-xs sm:text-sm text-blue-600 mb-1 sm:mb-2"> ${new Date(item.published_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </div> <h2 class="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 transition line-clamp-2"> ${item.title} </h2> <p class="text-sm text-slate-600 line-clamp-3"> ${item.excerpt || item.content.substring(0, 120) + "..."} </p> <div class="mt-3 sm:mt-4 text-xs text-slate-500">Oleh ${item.author || "Admin"}</div> </div> </a>`)} </div> ${activeBlogs.length === 0 && renderTemplate`<div class="text-center py-12"> <p class="text-slate-500 text-sm md:text-base">Belum ada artikel blog.</p> </div>`} </div> </section> ` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/blog/index.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
