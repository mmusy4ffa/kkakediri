import { c as createComponent, a as renderTemplate, e as renderHead } from '../../chunks/astro/server_Bavjlja2.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login Admin</title>', `</head> <body class="bg-slate-100 min-h-screen flex items-center justify-center"> <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-4"> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-blue-600">KKA RADAR</h1> <p class="text-slate-500 mt-1">Admin Login</p> </div> <form id="login-form"> <div> <label class="block text-sm font-medium mb-1">Username</label> <input id="username" type="text" required class="w-full rounded-xl border border-gray-300 px-4 py-3"> </div> <div class="mt-4"> <label class="block text-sm font-medium mb-1">Password</label> <input id="password" type="password" required class="w-full rounded-xl border border-gray-300 px-4 py-3"> </div> <div id="login-status" class="mt-4 text-sm"></div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-base mt-4">
Login
</button> </form> </div> <script>
      document.getElementById('login-form').addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const status = document.getElementById('login-status');

        if (!username || !password) {
          status.textContent = 'Username dan password wajib diisi';
          status.style.color = 'red';
          return;
        }

        status.textContent = 'Login...';
        status.style.color = 'blue';

        try {
          const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });

          const result = await res.json();

          if (!res.ok) {
            throw new Error(result.error || 'Login gagal');
          }

          status.textContent = 'Login berhasil!';
          status.style.color = 'green';

          // Redirect pake location.replace biar ga bisa back
          window.location.replace('/admin/dashboard');
        } catch (error) {
          status.textContent = error.message;
          status.style.color = 'red';
        }
      });
    <\/script> </body> </html>`])), renderHead());
}, "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/login.astro", void 0);

const $$file = "D:/Magang Industri/ProjectKKA3/kkakediri/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
