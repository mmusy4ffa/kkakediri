import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const prerender = false;

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID hero wajib diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data: hero, error: getError } = await supabaseServer
      .from('hero_slider')
      .select('image')
      .eq('id', id)
      .single();

    if (getError) {
      return new Response(JSON.stringify({ error: getError.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (hero?.image) {
      const fileName = hero.image.split('/').pop();
      if (fileName) {
        await supabaseServer.storage.from('hero').remove([fileName]);
      }
    }

    const { error: deleteError } = await supabaseServer.from('hero_slider').delete().eq('id', id);

    if (deleteError) {
      return new Response(JSON.stringify({ error: deleteError.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Delete error:', error);
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
