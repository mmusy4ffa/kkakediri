import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, e as renderHead, r as renderComponent, f as renderSlot } from './astro/server_Bavjlja2.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const pathname = Astro2.url.pathname;
  const username = Astro2.cookies.get("admin_username")?.value || "Admin";
  const menus = [
    {
      title: "Dashboard",
      items: [{ name: "Dashboard", url: "/admin/dashboard" }]
    },
    {
      title: "Kelola Website",
      items: [
        { name: "Hero Slider", url: "/admin/website/hero" },
        { name: "Visi Misi", url: "/admin/vision" },
        { name: "Tentang KKA", url: "/admin/about" },
        { name: "Partner", url: "/admin/partner" },
        { name: "Statistics", url: "/admin/statistics" },
        { name: "Footer", url: "/admin/footer" }
      ]
    },
    {
      title: "Informasi",
      items: [
        { name: "Pendaftaran Mandiri", url: "/admin/registration/mandiri" },
        { name: "Pendaftaran Kolektif", url: "/admin/registration/kolektif" }
      ]
    },
    {
      title: "Manajemen",
      items: [
        { name: "Pendaftar", url: "/admin/pendaftar" },
        { name: "Kontak", url: "/admin/contact" },
        { name: "Pengaturan", url: "/admin/settings" },
        { name: "Pengguna", url: "/admin/users" },
        { name: "Profil Saya", url: "/admin/profile" }
      ]
    },
    {
      title: "Manajemen",
      items: [
        { name: "Pendaftar", url: "/admin/pendaftar" },
        { name: "Kontak", url: "/admin/contact" },
        { name: "Pengguna", url: "/admin/users" },
        { name: "Profil Saya", url: "/admin/profile" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="fixed left-0 top-0 h-screen w-72 overflow-y-auto border-r border-slate-200 bg-white flex flex-col"> <div class="border-b border-slate-200 p-6"> <h1 class="text-2xl font-bold text-blue-600">KKA RADAR</h1> <p class="text-sm text-slate-500">Content Management System</p> </div> <div class="flex-1 p-4 overflow-y-auto"> ${menus.map((group) => renderTemplate`<div class="mb-6"> <p class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400"> ${group.title} </p> ${group.items.map((menu) => renderTemplate`<a${addAttribute(menu.url, "href")}${addAttribute([
    "mb-1 block rounded-lg px-4 py-3 transition",
    pathname === menu.url ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"
  ], "class:list")}> ${menu.name} </a>`)} </div>`)} </div> <div class="border-t border-slate-200 p-4"> <div class="flex items-center justify-between"> <span class="text-sm text-slate-600">Halo, ${username}</span> <a href="/api/admin/logout" class="text-sm text-red-600 hover:underline"> Logout </a> </div> </div> </aside>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/admin/Sidebar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Topbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Topbar;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8"> <div> <h2 class="text-2xl font-bold"> ${title} </h2> <p class="text-sm text-slate-500">Admin Dashboard</p> </div> <div class="flex items-center gap-3"> <div class="h-11 w-11 rounded-full bg-blue-600"></div> <div> <p class="font-semibold">Administrator</p> <p class="text-sm text-slate-500">Super Admin</p> </div> </div> </header>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/components/admin/Topbar.astro", void 0);

const $$Astro = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "Dashboard" } = Astro2.props;
  const session = Astro2.cookies.get("admin_session")?.value;
  if (session !== "true") {
    return Astro2.redirect("/admin/login");
  }
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body class="bg-slate-100"> ${renderComponent($$result, "Sidebar", $$Sidebar, {})} <div class="ml-72"> ${renderComponent($$result, "Topbar", $$Topbar, { "title": title })} <main class="p-8"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
