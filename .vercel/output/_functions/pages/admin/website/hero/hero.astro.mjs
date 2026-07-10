import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro } from '../../../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle, image, buttonText, buttonLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center"> <div class="absolute inset-0 z-0"> <img${addAttribute(image || "/images/hero-bg.jpg", "src")} alt="Hero" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/50"></div> </div> <div class="container mx-auto px-4 md:px-6 relative z-10 text-white"> <div class="max-w-2xl"> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"> ${title || "Kompetisi Kompetensi Akademik (KKA) 2026"} </h1> <p class="mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90"> ${subtitle || '"Challenge Your Brain, Test Your Skills"'} </p> ${buttonText && buttonLink && renderTemplate`<a${addAttribute(buttonLink, "href")} class="mt-4 md:mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl transition text-sm sm:text-base"> ${buttonText} </a>`} </div> </div> </section>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/website/hero/hero.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/website/hero/hero.astro";
const $$url = "/admin/website/hero/hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hero,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
