import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const GET: APIRoute = async () => {
  try {
    const { data, error } = await supabaseServer
      .from('hero')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
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
