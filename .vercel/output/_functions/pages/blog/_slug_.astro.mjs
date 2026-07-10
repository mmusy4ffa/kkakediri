import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BP3Tp8KW.mjs';
import { g as getBlogBySlug, a as getBlogs } from '../../chunks/blog_CSnbB7A5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const blogs = await getBlogs();
  return blogs.filter((item) => item.is_active).map((item) => ({
    params: { slug: item.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const blog = await getBlogBySlug(slug);
  const contentParagraphs = blog?.content ? blog.content.split("\n") : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": blog?.title || "Blog" }, { "default": async ($$result2) => renderTemplate`${blog ? renderTemplate`${maybeRenderHead()}<section class="py-8 md:py-12 lg:py-16"> <div class="container mx-auto px-4 md:px-6 max-w-4xl"> <a href="/blog" class="text-blue-600 hover:underline mb-4 md:mb-6 inline-block text-sm md:text-base">
← Kembali ke Blog
</a> <article class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"> ${blog.image && renderTemplate`<div class="w-full overflow-hidden"> <img${addAttribute(blog.image, "src")}${addAttribute(blog.title, "alt")} class="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"> </div>`} <div class="p-4 sm:p-6 md:p-8 lg:p-10"> <div class="text-xs sm:text-sm text-blue-600 mb-2"> ${new Date(blog.published_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </div> <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 break-words"> ${blog.title} </h1> <div class="text-xs sm:text-sm text-slate-500 mb-4 md:mb-6">
Oleh ${blog.author || "Admin"} </div> <div class="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed sm:leading-7 md:leading-8 break-words overflow-hidden"> ${contentParagraphs.map((paragraph, index) => renderTemplate`<p class="mb-3 md:mb-4 last:mb-0">${paragraph}</p>`)} </div> </div> </article> </div> </section>` : renderTemplate`<section class="py-12 md:py-16"> <div class="container mx-auto px-4 md:px-6 max-w-4xl text-center"> <h1 class="text-2xl md:text-3xl font-bold">Artikel tidak ditemukan</h1> <p class="mt-4 text-slate-500 text-sm md:text-base">
Maaf, artikel yang Anda cari tidak tersedia.
</p> <a href="/blog" class="mt-6 inline-block text-blue-600 hover:underline text-sm md:text-base">
← Kembali ke Blog
</a> </div> </section>`}` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/blog/[slug].astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
