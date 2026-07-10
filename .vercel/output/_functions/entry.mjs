import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_B6phuTT6.mjs';
import { manifest } from './manifest_DrO4NZqr.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/about/create.astro.mjs');
const _page3 = () => import('./pages/admin/about/edit/_id_.astro.mjs');
const _page4 = () => import('./pages/admin/about.astro.mjs');
const _page5 = () => import('./pages/admin/blog/create.astro.mjs');
const _page6 = () => import('./pages/admin/blog/edit/_id_.astro.mjs');
const _page7 = () => import('./pages/admin/blog.astro.mjs');
const _page8 = () => import('./pages/admin/contact/_id_.astro.mjs');
const _page9 = () => import('./pages/admin/contact.astro.mjs');
const _page10 = () => import('./pages/admin/dashboard.astro.mjs');
const _page11 = () => import('./pages/admin/footer/create.astro.mjs');
const _page12 = () => import('./pages/admin/footer/edit/_id_.astro.mjs');
const _page13 = () => import('./pages/admin/footer.astro.mjs');
const _page14 = () => import('./pages/admin/gallery/create.astro.mjs');
const _page15 = () => import('./pages/admin/gallery/edit/_id_.astro.mjs');
const _page16 = () => import('./pages/admin/gallery.astro.mjs');
const _page17 = () => import('./pages/admin/login.astro.mjs');
const _page18 = () => import('./pages/admin/partner/create.astro.mjs');
const _page19 = () => import('./pages/admin/partner/edit/_id_.astro.mjs');
const _page20 = () => import('./pages/admin/partner.astro.mjs');
const _page21 = () => import('./pages/admin/pendaftar.astro.mjs');
const _page22 = () => import('./pages/admin/registration/kolektif/create.astro.mjs');
const _page23 = () => import('./pages/admin/registration/kolektif/edit/_id_.astro.mjs');
const _page24 = () => import('./pages/admin/registration/kolektif.astro.mjs');
const _page25 = () => import('./pages/admin/registration/mandiri/create.astro.mjs');
const _page26 = () => import('./pages/admin/registration/mandiri/edit/_id_.astro.mjs');
const _page27 = () => import('./pages/admin/registration/mandiri.astro.mjs');
const _page28 = () => import('./pages/admin/regulation/create.astro.mjs');
const _page29 = () => import('./pages/admin/regulation/edit/_id_.astro.mjs');
const _page30 = () => import('./pages/admin/regulation.astro.mjs');
const _page31 = () => import('./pages/admin/settings.astro.mjs');
const _page32 = () => import('./pages/admin/statistics.astro.mjs');
const _page33 = () => import('./pages/admin/vision/create.astro.mjs');
const _page34 = () => import('./pages/admin/vision/edit/_id_.astro.mjs');
const _page35 = () => import('./pages/admin/vision.astro.mjs');
const _page36 = () => import('./pages/admin/website/hero/about.astro.mjs');
const _page37 = () => import('./pages/admin/website/hero/create.astro.mjs');
const _page38 = () => import('./pages/admin/website/hero/edit/_id_.astro.mjs');
const _page39 = () => import('./pages/admin/website/hero/hero.astro.mjs');
const _page40 = () => import('./pages/admin/website/hero.astro.mjs');
const _page41 = () => import('./pages/api/about/create.astro.mjs');
const _page42 = () => import('./pages/api/about/delete.astro.mjs');
const _page43 = () => import('./pages/api/about/update.astro.mjs');
const _page44 = () => import('./pages/api/about/upload.astro.mjs');
const _page45 = () => import('./pages/api/admin/login.astro.mjs');
const _page46 = () => import('./pages/api/admin/logout.astro.mjs');
const _page47 = () => import('./pages/api/admin/register.astro.mjs');
const _page48 = () => import('./pages/api/blog/create.astro.mjs');
const _page49 = () => import('./pages/api/blog/delete.astro.mjs');
const _page50 = () => import('./pages/api/blog/update.astro.mjs');
const _page51 = () => import('./pages/api/blog/upload.astro.mjs');
const _page52 = () => import('./pages/api/contact/delete.astro.mjs');
const _page53 = () => import('./pages/api/contact.astro.mjs');
const _page54 = () => import('./pages/api/contact-info/update.astro.mjs');
const _page55 = () => import('./pages/api/daftar.astro.mjs');
const _page56 = () => import('./pages/api/footer/create.astro.mjs');
const _page57 = () => import('./pages/api/footer/delete.astro.mjs');
const _page58 = () => import('./pages/api/footer/footer.astro.mjs');
const _page59 = () => import('./pages/api/footer/update.astro.mjs');
const _page60 = () => import('./pages/api/gallery/create.astro.mjs');
const _page61 = () => import('./pages/api/gallery/delete.astro.mjs');
const _page62 = () => import('./pages/api/gallery/update.astro.mjs');
const _page63 = () => import('./pages/api/gallery/upload.astro.mjs');
const _page64 = () => import('./pages/api/hero/create.astro.mjs');
const _page65 = () => import('./pages/api/hero/delete.astro.mjs');
const _page66 = () => import('./pages/api/hero/update.astro.mjs');
const _page67 = () => import('./pages/api/hero/upload.astro.mjs');
const _page68 = () => import('./pages/api/hero.astro.mjs');
const _page69 = () => import('./pages/api/partner/create.astro.mjs');
const _page70 = () => import('./pages/api/partner/delete.astro.mjs');
const _page71 = () => import('./pages/api/partner/update.astro.mjs');
const _page72 = () => import('./pages/api/partner/upload.astro.mjs');
const _page73 = () => import('./pages/api/pendaftar/approve.astro.mjs');
const _page74 = () => import('./pages/api/pendaftar/cek-status.astro.mjs');
const _page75 = () => import('./pages/api/pendaftar/delete.astro.mjs');
const _page76 = () => import('./pages/api/pendaftar/export.astro.mjs');
const _page77 = () => import('./pages/api/pendaftar/reject.astro.mjs');
const _page78 = () => import('./pages/api/pendaftar/upload-bukti.astro.mjs');
const _page79 = () => import('./pages/api/pendaftar.astro.mjs');
const _page80 = () => import('./pages/api/registration/create.astro.mjs');
const _page81 = () => import('./pages/api/registration/delete.astro.mjs');
const _page82 = () => import('./pages/api/registration/update.astro.mjs');
const _page83 = () => import('./pages/api/registration/upload.astro.mjs');
const _page84 = () => import('./pages/api/regulation/create.astro.mjs');
const _page85 = () => import('./pages/api/regulation/delete.astro.mjs');
const _page86 = () => import('./pages/api/regulation/update.astro.mjs');
const _page87 = () => import('./pages/api/regulation/upload.astro.mjs');
const _page88 = () => import('./pages/api/settings/update.astro.mjs');
const _page89 = () => import('./pages/api/statistic/update.astro.mjs');
const _page90 = () => import('./pages/api/test.astro.mjs');
const _page91 = () => import('./pages/api/vision/create.astro.mjs');
const _page92 = () => import('./pages/api/vision/delete.astro.mjs');
const _page93 = () => import('./pages/api/vision/update.astro.mjs');
const _page94 = () => import('./pages/blog/_slug_.astro.mjs');
const _page95 = () => import('./pages/blog.astro.mjs');
const _page96 = () => import('./pages/cek-status.astro.mjs');
const _page97 = () => import('./pages/daftar.astro.mjs');
const _page98 = () => import('./pages/informasi/kolektif.astro.mjs');
const _page99 = () => import('./pages/informasi/mandiri.astro.mjs');
const _page100 = () => import('./pages/invoice.astro.mjs');
const _page101 = () => import('./pages/kontak.astro.mjs');
const _page102 = () => import('./pages/regulasi.astro.mjs');
const _page103 = () => import('./pages/status-pendaftaran.astro.mjs');
const _page104 = () => import('./pages/tentang.astro.mjs');
const _page105 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/about/create.astro", _page2],
    ["src/pages/admin/about/edit/[id].astro", _page3],
    ["src/pages/admin/about.astro", _page4],
    ["src/pages/admin/blog/create.astro", _page5],
    ["src/pages/admin/blog/edit/[id].astro", _page6],
    ["src/pages/admin/blog/index.astro", _page7],
    ["src/pages/admin/contact/[id].astro", _page8],
    ["src/pages/admin/contact.astro", _page9],
    ["src/pages/admin/dashboard.astro", _page10],
    ["src/pages/admin/footer/create.astro", _page11],
    ["src/pages/admin/footer/edit/[id].astro", _page12],
    ["src/pages/admin/footer.astro", _page13],
    ["src/pages/admin/gallery/create.astro", _page14],
    ["src/pages/admin/gallery/edit/[id].astro", _page15],
    ["src/pages/admin/gallery.astro", _page16],
    ["src/pages/admin/login.astro", _page17],
    ["src/pages/admin/partner/create.astro", _page18],
    ["src/pages/admin/partner/edit/[id].astro", _page19],
    ["src/pages/admin/partner.astro", _page20],
    ["src/pages/admin/pendaftar.astro", _page21],
    ["src/pages/admin/registration/kolektif/create.astro", _page22],
    ["src/pages/admin/registration/kolektif/edit/[id].astro", _page23],
    ["src/pages/admin/registration/kolektif.astro", _page24],
    ["src/pages/admin/registration/mandiri/create.astro", _page25],
    ["src/pages/admin/registration/mandiri/edit/[id].astro", _page26],
    ["src/pages/admin/registration/mandiri.astro", _page27],
    ["src/pages/admin/regulation/create.astro", _page28],
    ["src/pages/admin/regulation/edit/[id].astro", _page29],
    ["src/pages/admin/regulation.astro", _page30],
    ["src/pages/admin/settings.astro", _page31],
    ["src/pages/admin/statistics.astro", _page32],
    ["src/pages/admin/vision/create.astro", _page33],
    ["src/pages/admin/vision/edit/[id].astro", _page34],
    ["src/pages/admin/vision.astro", _page35],
    ["src/pages/admin/website/hero/about.astro", _page36],
    ["src/pages/admin/website/hero/create.astro", _page37],
    ["src/pages/admin/website/hero/edit/[id].astro", _page38],
    ["src/pages/admin/website/hero/hero.astro", _page39],
    ["src/pages/admin/website/hero/index.astro", _page40],
    ["src/pages/api/about/create.ts", _page41],
    ["src/pages/api/about/delete.ts", _page42],
    ["src/pages/api/about/update.ts", _page43],
    ["src/pages/api/about/upload.ts", _page44],
    ["src/pages/api/admin/login.ts", _page45],
    ["src/pages/api/admin/logout.ts", _page46],
    ["src/pages/api/admin/register.ts", _page47],
    ["src/pages/api/blog/create.ts", _page48],
    ["src/pages/api/blog/delete.ts", _page49],
    ["src/pages/api/blog/update.ts", _page50],
    ["src/pages/api/blog/upload.ts", _page51],
    ["src/pages/api/contact/delete.ts", _page52],
    ["src/pages/api/contact/index.ts", _page53],
    ["src/pages/api/contact-info/update.ts", _page54],
    ["src/pages/api/daftar.ts", _page55],
    ["src/pages/api/footer/create.ts", _page56],
    ["src/pages/api/footer/delete.ts", _page57],
    ["src/pages/api/footer/footer.ts", _page58],
    ["src/pages/api/footer/update.ts", _page59],
    ["src/pages/api/gallery/create.ts", _page60],
    ["src/pages/api/gallery/delete.ts", _page61],
    ["src/pages/api/gallery/update.ts", _page62],
    ["src/pages/api/gallery/upload.ts", _page63],
    ["src/pages/api/hero/create.ts", _page64],
    ["src/pages/api/hero/delete.ts", _page65],
    ["src/pages/api/hero/update.ts", _page66],
    ["src/pages/api/hero/upload.ts", _page67],
    ["src/pages/api/hero/index.ts", _page68],
    ["src/pages/api/partner/create.ts", _page69],
    ["src/pages/api/partner/delete.ts", _page70],
    ["src/pages/api/partner/update.ts", _page71],
    ["src/pages/api/partner/upload.ts", _page72],
    ["src/pages/api/pendaftar/approve.ts", _page73],
    ["src/pages/api/pendaftar/cek-status.ts", _page74],
    ["src/pages/api/pendaftar/delete.ts", _page75],
    ["src/pages/api/pendaftar/export.ts", _page76],
    ["src/pages/api/pendaftar/reject.ts", _page77],
    ["src/pages/api/pendaftar/upload-bukti.ts", _page78],
    ["src/pages/api/pendaftar/index.ts", _page79],
    ["src/pages/api/registration/create.ts", _page80],
    ["src/pages/api/registration/delete.ts", _page81],
    ["src/pages/api/registration/update.ts", _page82],
    ["src/pages/api/registration/upload.ts", _page83],
    ["src/pages/api/regulation/create.ts", _page84],
    ["src/pages/api/regulation/delete.ts", _page85],
    ["src/pages/api/regulation/update.ts", _page86],
    ["src/pages/api/regulation/upload.ts", _page87],
    ["src/pages/api/settings/update.ts", _page88],
    ["src/pages/api/statistic/update.ts", _page89],
    ["src/pages/api/test.ts", _page90],
    ["src/pages/api/vision/create.ts", _page91],
    ["src/pages/api/vision/delete.ts", _page92],
    ["src/pages/api/vision/update.ts", _page93],
    ["src/pages/blog/[slug].astro", _page94],
    ["src/pages/blog/index.astro", _page95],
    ["src/pages/cek-status.astro", _page96],
    ["src/pages/daftar.astro", _page97],
    ["src/pages/informasi/kolektif.astro", _page98],
    ["src/pages/informasi/mandiri.astro", _page99],
    ["src/pages/invoice.astro", _page100],
    ["src/pages/kontak.astro", _page101],
    ["src/pages/regulasi.astro", _page102],
    ["src/pages/status-pendaftaran.astro", _page103],
    ["src/pages/tentang.astro", _page104],
    ["src/pages/index.astro", _page105]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "318dabec-5188-4d3a-a0bc-13514ffe51a1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
