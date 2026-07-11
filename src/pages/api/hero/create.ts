import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { title, subtitle, button_text, button_link, image, sort_order, is_active } = body;

    if (!title) {
      return new Response(JSON.stringify({ error: 'Judul wajib diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data, error } = await supabaseServer
      .from('hero_slider')
      .insert({
        title: title,
        subtitle: subtitle || '',
        button_text: button_text || '',
        button_link: button_link || '',
        image: image || '',
        sort_order: sort_order || 1,
        is_active: is_active ?? true,
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
    console.error('Create hero error:', error);
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
