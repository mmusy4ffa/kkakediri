import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const prerender = false;

export const PUT: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, title, subtitle, button_text, button_link, image, sort_order, is_active } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID hero wajib diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (subtitle !== undefined) updateData.subtitle = subtitle;
    if (button_text !== undefined) updateData.button_text = button_text;
    if (button_link !== undefined) updateData.button_link = button_link;
    if (image !== undefined) updateData.image = image;
    if (sort_order !== undefined) updateData.sort_order = sort_order;
    if (is_active !== undefined) updateData.is_active = is_active;

    const { data, error } = await supabaseServer
      .from('hero_slider')
      .update(updateData)
      .eq('id', Number(id))
      .select();

    if (error) {
      console.error('Update error:', error);
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
    console.error('Update error:', error);
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
