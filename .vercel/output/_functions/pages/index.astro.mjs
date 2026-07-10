import { c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BP3Tp8KW.mjs';
import 'clsx';
import { g as getHeroes } from '../chunks/hero_DKd2EtUL.mjs';
import { g as getAbout } from '../chunks/about_LK8FQ0rG.mjs';
import { a as getVisions } from '../chunks/vision_CUBVRY7k.mjs';
import { s as supabase } from '../chunks/supabase_BQgYTxfM.mjs';
import { a as getBlogs } from '../chunks/blog_CSnbB7A5.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const heroes = await getHeroes();
  return renderTemplate(_a || (_a = __template(["", '<section class="relative h-[700px] overflow-hidden"> ', " </section> <script>\n  const slides = document.querySelectorAll('.hero-slide');\n\n  let current = 0;\n\n  setInterval(() => {\n    slides[current].classList.remove('opacity-100');\n    slides[current].classList.add('opacity-0');\n\n    current++;\n\n    if (current >= slides.length) {\n      current = 0;\n    }\n\n    slides[current].classList.remove('opacity-0');\n    slides[current].classList.add('opacity-100');\n  }, 5000);\n<\/script>"])), maybeRenderHead(), heroes.map((hero, index) => renderTemplate`<div${addAttribute([
    "hero-slide absolute inset-0 transition-opacity duration-1000",
    index === 0 ? "opacity-100" : "opacity-0"
  ], "class:list")}> <img${addAttribute(hero.image, "src")} class="h-full w-full object-cover"${addAttribute(hero.title, "alt")}> <div class="absolute inset-0 bg-black/50"></div> <div class="absolute inset-0 flex items-center"> <div class="mx-auto w-full max-w-7xl px-6"> <h1 class="max-w-3xl text-6xl font-bold text-white">${hero.title}</h1> <p class="mt-6 max-w-2xl text-xl text-white">${hero.subtitle}</p> <a${addAttribute(hero.button_link, "href")} class="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 text-white"> ${hero.button_text} </a> </div> </div> </div>`));
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/Hero.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getAbout();
  const activeAbout = about.filter((item) => item.is_active).sort((a, b) => a.sort_order - b.sort_order);
  const mainItem = activeAbout.length > 0 ? activeAbout[0] : null;
  const subItems = activeAbout.length > 1 ? activeAbout.slice(1) : [];
  return renderTemplate`${activeAbout.length > 0 && renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16 lg:py-20 bg-white"><div class="container mx-auto px-4 md:px-6"><div class="max-w-3xl mx-auto text-center"><span class="text-blue-600 font-semibold text-sm md:text-base">TENTANG KKA 2026</span><h2 class="mt-2 md:mt-3 text-2xl md:text-3xl lg:text-4xl font-bold">
Apa Itu KKA Radar Kediri?
</h2><div class="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div></div><div class="max-w-4xl mx-auto mt-8 md:mt-12">${mainItem && renderTemplate`<div class="mb-6 md:mb-8"><p class="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed md:leading-8 text-center break-words">${mainItem.description}</p></div>`}${subItems.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">${subItems.map((subItem) => renderTemplate`<div class="bg-slate-50 rounded-2xl p-4 md:p-6 text-center hover:shadow-md transition h-full flex flex-col">${subItem.image && renderTemplate`<div class="flex justify-center mb-3 md:mb-4 flex-shrink-0"><img${addAttribute(subItem.image, "src")}${addAttribute(subItem.title, "alt")} class="h-12 w-12 md:h-16 md:w-16 object-contain"></div>`}<h3 class="text-base md:text-lg font-bold mb-2 flex-shrink-0 break-words">${subItem.title}</h3><p class="text-sm md:text-base text-slate-600 leading-relaxed break-words flex-1">${subItem.description}</p></div>`)}</div>`}</div><div class="text-center mt-8 md:mt-12"><a href="/tentang" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-xl transition text-sm md:text-base">
Selengkapnya →
</a></div></div></section>`}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/About.astro", void 0);

const $$VisionMission = createComponent(async ($$result, $$props, $$slots) => {
  const visions = await getVisions();
  const activeVisions = visions.filter((v) => v.is_active).sort((a, b) => a.sort_order - b.sort_order);
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-50 py-12 md:py-16"> <div class="container mx-auto px-4 md:px-6"> <div class="mb-8 md:mb-12 text-center"> <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Visi & Misi</h2> <p class="mt-2 text-sm md:text-base text-slate-500">
Mewujudkan generasi unggul melalui kompetisi akademik berkualitas
</p> </div> <div class="flex justify-center"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl w-full"> ${activeVisions.length > 0 ? activeVisions.map((vision) => renderTemplate`<div class="rounded-2xl bg-white p-4 md:p-6 lg:p-8 shadow-lg transition hover:shadow-xl border border-gray-100"> <h3 class="text-base md:text-lg lg:text-xl font-bold mb-2 line-clamp-2"> ${vision.title} </h3> <p class="text-sm md:text-base text-slate-600 leading-relaxed line-clamp-4"> ${vision.description} </p> </div>`) : renderTemplate`<p class="col-span-1 md:col-span-2 text-center text-slate-500 text-sm md:text-base">
Belum ada data visi misi.
</p>`} </div> </div> </div> </section>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/VisionMission.astro", void 0);

const $$ProgramSection = createComponent(($$result, $$props, $$slots) => {
  const programs = [
    {
      title: "Pendaftaran Mandiri",
      description: "Peserta melakukan pendaftaran secara individu melalui website.",
      icon: "\u{1F464}",
      link: "/informasi/mandiri"
    },
    {
      title: "Pendaftaran Kolektif",
      description: "Pendaftaran dilakukan oleh sekolah, kampus, atau instansi.",
      icon: "\u{1F465}",
      link: "/informasi/kolektif"
    },
    {
      title: "Sertifikasi Kompetensi",
      description: "Pelaksanaan uji kompetensi sesuai skema yang dipilih.",
      icon: "\u{1F3C6}",
      link: "/regulasi"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"> <span class="text-blue-600 font-semibold text-sm sm:text-base">PROGRAM</span> <h2 class="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
Program KKA Radar
</h2> <p class="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base text-slate-500">
Pilih layanan yang sesuai dengan kebutuhan Anda.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"> ${programs.map((program) => renderTemplate`<div class="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 transition hover:-translate-y-2 hover:shadow-xl"> <div class="mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl">${program.icon}</div> <h3 class="text-lg sm:text-xl md:text-2xl font-bold leading-tight">${program.title}</h3> <p class="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base leading-relaxed sm:leading-7 md:leading-8 text-slate-600"> ${program.description} </p> <a${addAttribute(program.link, "href")} class="mt-4 sm:mt-5 md:mt-8 inline-block font-semibold text-blue-600 hover:underline text-sm sm:text-base">
Selengkapnya →
</a> </div>`)} </div> </div> </section>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/ProgramSection.astro", void 0);

const $$RegistrationFlow = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "Pilih Program",
      description: "Pilih program sertifikasi atau pelatihan yang ingin diikuti."
    },
    {
      number: "02",
      title: "Isi Formulir",
      description: "Lengkapi formulir pendaftaran secara online."
    },
    {
      number: "03",
      title: "Verifikasi",
      description: "Admin akan memverifikasi data dan dokumen peserta."
    },
    {
      number: "04",
      title: "Ikuti Pelatihan",
      description: "Peserta mengikuti pelatihan dan uji kompetensi."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-50 py-24"> <div class="mx-auto max-w-7xl px-6"> <div class="mb-16 text-center"> <span class="font-semibold text-blue-600"> ALUR PENDAFTARAN </span> <h2 class="mt-3 text-5xl font-bold">Langkah Mudah Mendaftar</h2> <p class="mt-4 text-slate-500">Ikuti langkah berikut untuk menjadi peserta KKA Radar.</p> </div> <div class="grid gap-8 md:grid-cols-4"> ${steps.map((step) => renderTemplate`<div class="relative rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2"> <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white"> ${step.number} </div> <h3 class="text-2xl font-bold">${step.title}</h3> <p class="mt-4 leading-8 text-slate-600">${step.description}</p> </div>`)} </div> </div> </section>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/RegistrationFlow.astro", void 0);

async function getStatistics() {
  const { data, error } = await supabase.from("statistics").select("*").order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

const $$Statistics = createComponent(async ($$result, $$props, $$slots) => {
  const stats = await getStatistics();
  const activeStats = stats.filter((item) => item.is_active).sort((a, b) => a.sort_order - b.sort_order);
  return renderTemplate`${activeStats.length > 0 && renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16 bg-blue-600 text-white"><div class="container mx-auto px-4 md:px-6"><div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">${activeStats.map((item) => renderTemplate`<div class="text-center"><div class="text-3xl md:text-4xl lg:text-5xl font-bold">${item.value}</div><div class="text-sm md:text-base mt-2 text-blue-100">${item.label}</div></div>`)}</div></div></section>`}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/Statistics.astro", void 0);

async function getPartners() {
  const { data, error } = await supabase.from("partners").select("*").order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

const $$Partner = createComponent(async ($$result, $$props, $$slots) => {
  const partners = await getPartners();
  const activePartners = partners.filter((item) => item.is_active).sort((a, b) => a.sort_order - b.sort_order);
  return renderTemplate`${activePartners.length > 0 && renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16 bg-slate-50"><div class="container mx-auto px-4 md:px-6 max-w-6xl"><div class="text-center mb-8 md:mb-12"><h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Partner Kami</h2><p class="mt-2 text-slate-500">Bersama menuju generasi unggul</p></div><div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">${activePartners.map((item) => renderTemplate`<a${addAttribute(item.website || "#", "href")}${addAttribute(item.website ? "_blank" : "_self", "target")}${addAttribute(item.website ? "noopener noreferrer" : "", "rel")} class="grayscale hover:grayscale-0 transition duration-300">${item.logo ? renderTemplate`<img${addAttribute(item.logo, "src")}${addAttribute(item.name, "alt")} class="h-12 md:h-16 w-auto object-contain">` : renderTemplate`<span class="text-lg font-semibold text-slate-600">${item.name}</span>`}</a>`)}</div></div></section>`}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/Partner.astro", void 0);

async function getGalleries() {
  const { data, error } = await supabase.from("galleries").select("*").order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const galleries = await getGalleries();
  const activeGalleries = galleries.filter((item) => item.is_active).sort((a, b) => a.sort_order - b.sort_order);
  return renderTemplate`${activeGalleries.length > 0 && renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16 bg-white"><div class="container mx-auto px-4 md:px-6"><div class="text-center mb-8 md:mb-12"><h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Galeri</h2><p class="mt-2 text-slate-500">Dokumentasi kegiatan KKA</p></div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">${activeGalleries.map((item) => renderTemplate`<div class="group relative overflow-hidden rounded-xl aspect-square"><img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover transition group-hover:scale-110"><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-3"><p class="text-white text-sm font-semibold">${item.title}</p></div></div>`)}</div></div></section>`}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/Gallery.astro", void 0);

const $$LatestBlog = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await getBlogs();
  const latestBlogs = blogs.filter((item) => item.is_active).slice(0, 3);
  return renderTemplate`${latestBlogs.length > 0 && renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16 bg-white"><div class="container mx-auto px-4 md:px-6 max-w-6xl"><div class="text-center mb-8 md:mb-12"><h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Berita Terbaru</h2><p class="mt-2 text-slate-500">Informasi terkini seputar KKA</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">${latestBlogs.map((item, index) => renderTemplate`<a${addAttribute(`/blog/${item.slug}`, "href")} class="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100 group">${item.image ? renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-48 object-cover group-hover:scale-105 transition duration-300">` : renderTemplate`<div class="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
No Image
</div>`}<div class="p-6"><div class="text-sm text-blue-600 mb-2">${new Date(item.published_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })}</div><h3 class="text-lg font-bold mb-2 group-hover:text-blue-600 transition line-clamp-2">${item.title}</h3><p class="text-slate-600 text-sm line-clamp-3">${item.excerpt || item.content.substring(0, 120) + "..."}</p><div class="mt-4 text-xs text-slate-500">Oleh ${item.author || "Admin"}</div></div></a>`)}</div>${latestBlogs.length < 3 && renderTemplate`<div class="text-center mt-8 text-slate-500 text-sm">${latestBlogs.length === 0 ? "Belum ada artikel." : "Tambahkan lebih banyak artikel."}</div>`}<div class="text-center mt-8 md:mt-12"><a href="/blog" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-xl transition text-sm md:text-base">
Lihat Semua Berita
</a></div></div></section>`}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/website/LatestBlog.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "KKA 2026" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "VisionMission", $$VisionMission, {})} ${renderComponent($$result2, "ProgramSection", $$ProgramSection, {})} ${renderComponent($$result2, "RegistrationFlow", $$RegistrationFlow, {})} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Partner", $$Partner, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ${renderComponent($$result2, "LatestBlog", $$LatestBlog, {})} ` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/index.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
