import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';

    if (!search) {
      return new Response(JSON.stringify({ error: 'Masukkan email atau nomor invoice' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let query = supabaseServer
      .from('pendaftar')
      .select('*')
      .order('created_at', { ascending: false });

    if (search.includes('KKA2026-')) {
      query = query.eq('invoice_number', search);
    } else {
      query = query.eq('email', search);
    }

    const { data, error } = await query.maybeSingle();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!data) {
      return new Response(JSON.stringify({ error: 'Data tidak ditemukan' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
