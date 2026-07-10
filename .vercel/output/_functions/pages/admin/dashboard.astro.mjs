import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BE5YHlp9.mjs';
import { s as supabaseServer } from '../../chunks/supabaseServer_CxI04Q0d.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const { count: totalPendaftar, error: err1 } = await supabaseServer.from("pendaftar").select("*", { count: "exact", head: true });
  const { count: pendingPendaftar, error: err2 } = await supabaseServer.from("pendaftar").select("*", { count: "exact", head: true }).eq("status_admin", "pending");
  const { count: approvedPendaftar, error: err3 } = await supabaseServer.from("pendaftar").select("*", { count: "exact", head: true }).eq("status_admin", "approved");
  const { count: totalBlog, error: err4 } = await supabaseServer.from("blogs").select("*", { count: "exact", head: true });
  const { count: totalPesan, error: err5 } = await supabaseServer.from("contacts").select("*", { count: "exact", head: true });
  const { count: pesanBelumDibaca, error: err6 } = await supabaseServer.from("contacts").select("*", { count: "exact", head: true }).eq("is_read", false);
  const { data: recentPendaftar } = await supabaseServer.from("pendaftar").select("nama, invoice_number, created_at, status_admin").order("created_at", { ascending: false }).limit(5);
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold">Dashboard</h1> <p class="mt-2 text-slate-500">Ringkasan data KKA Radar Kediri</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> <div class="bg-white rounded-2xl border p-6 shadow-sm"> <p class="text-slate-500 text-sm">Total Pendaftar</p> <p class="text-3xl font-bold text-blue-600">${totalPendaftar || 0}</p> </div> <div class="bg-white rounded-2xl border p-6 shadow-sm"> <p class="text-slate-500 text-sm">Pending</p> <p class="text-3xl font-bold text-yellow-500">${pendingPendaftar || 0}</p> </div> <div class="bg-white rounded-2xl border p-6 shadow-sm"> <p class="text-slate-500 text-sm">Approved</p> <p class="text-3xl font-bold text-green-600">${approvedPendaftar || 0}</p> </div> <div class="bg-white rounded-2xl border p-6 shadow-sm"> <p class="text-slate-500 text-sm">Total Blog</p> <p class="text-3xl font-bold text-purple-600">${totalBlog || 0}</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-white rounded-2xl border p-6 shadow-sm"> <div class="flex justify-between items-center mb-4"> <h2 class="text-lg font-bold">Pesan Masuk</h2> <span class="text-sm text-slate-500">Total: ${totalPesan || 0}</span> </div> <div class="flex items-center gap-4"> <span class="text-2xl font-bold text-blue-600">${pesanBelumDibaca || 0}</span> <span class="text-sm text-slate-500">Belum dibaca</span> <a href="/admin/contact" class="ml-auto text-blue-600 hover:underline text-sm">Lihat semua →</a> </div> </div> <div class="bg-white rounded-2xl border p-6 shadow-sm"> <div class="flex justify-between items-center mb-4"> <h2 class="text-lg font-bold">Pendaftar Terbaru</h2> <a href="/admin/pendaftar" class="text-blue-600 hover:underline text-sm">Lihat semua →</a> </div> ${recentPendaftar && recentPendaftar.length > 0 ? recentPendaftar.map((item) => renderTemplate`<div class="flex justify-between items-center py-2 border-b last:border-0"> <div> <p class="font-semibold text-sm">${item.nama}</p> <p class="text-xs text-slate-500">${item.invoice_number}</p> </div> <div class="text-right"> <span${addAttribute([
    "text-xs px-2 py-1 rounded-full",
    item.status_admin === "approved" ? "bg-green-100 text-green-700" : "",
    item.status_admin === "rejected" ? "bg-red-100 text-red-700" : "",
    item.status_admin === "pending" ? "bg-yellow-100 text-yellow-700" : "",
    !item.status_admin ? "bg-gray-100 text-gray-700" : ""
  ], "class:list")}> ${item.status_admin || "pending"} </span> <p class="text-xs text-slate-400 mt-1"> ${new Date(item.created_at).toLocaleDateString("id-ID")} </p> </div> </div>`) : renderTemplate`<p class="text-slate-500 text-sm">Belum ada pendaftar.</p>`} </div> </div> ` })}`;
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/dashboard.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
