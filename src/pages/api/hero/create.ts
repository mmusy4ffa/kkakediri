import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const { title, subtitle, button_text, button_link, image, sort_order } = body;

    console.log('📝 Data received:', { title, subtitle, image, sort_order });

    if (!title || !image) {
      return new Response(
        JSON.stringify({
          error: 'Judul dan gambar wajib diisi',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // ✅ Ganti dari 'heroes' ke 'hero_slider'
    // ✅ Tambahkan is_active: true (default aktif)
    const { data, error } = await supabaseServer
      .from('hero_slider') // <-- INI YANG BENAR!
      .insert({
        title,
        subtitle: subtitle || '',
        button_text: button_text || 'Daftar Sekarang',
        button_link: button_link || '/informasi/mandiri',
        image,
        sort_order: sort_order || 1,
        is_active: true, // <-- TAMBAHKAN INI!
      })
      .select();

    console.log('📊 Insert result:', { data, error });

    if (error) {
      console.error('❌ Database error:', error);
      return new Response(
        JSON.stringify({
          error: error.message,
          details: error.details,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('❌ Create error:', error);
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
