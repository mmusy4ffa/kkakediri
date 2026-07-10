import type { APIRoute } from 'astro';
import { supabaseServer } from '../../lib/supabaseServer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { nama, email, no_hp, asal_sekolah, jenjang, region, tipe_pendaftaran } = body;

    if (!nama || !email || !no_hp || !asal_sekolah || !jenjang || !region || !tipe_pendaftaran) {
      return new Response(JSON.stringify({ error: 'Semua field wajib diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data, error } = await supabaseServer
      .from('pendaftar')
      .insert({
        nama,
        email,
        no_hp,
        asal_sekolah,
        jenjang,
        region,
        tipe_pendaftaran,
        status: 'pending',
      })
      .select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Daftar error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
