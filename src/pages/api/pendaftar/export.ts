import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const { data: pendaftar, error } = await supabaseServer
      .from('pendaftar')
      .select('*')
      .eq('status_admin', 'approved')
      .order('created_at', { ascending: false });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const headers = [
      'Invoice',
      'Nama',
      'Email',
      'No HP',
      'Sekolah',
      'Jenjang',
      'Region',
      'Tipe',
      'Biaya',
      'Status',
      'Tanggal Daftar',
    ];

    let csv = headers.join(',') + '\n';

    pendaftar?.forEach((item) => {
      const row = [
        item.invoice_number || '',
        `"${item.nama || ''}"`,
        item.email || '',
        item.no_hp || '',
        `"${item.asal_sekolah || ''}"`,
        item.jenjang || '',
        item.region || '',
        item.tipe_pendaftaran || '',
        item.biaya || 0,
        item.status_admin || '',
        new Date(item.created_at).toLocaleDateString('id-ID'),
      ];
      csv += row.join(',') + '\n';
    });

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition':
          'attachment; filename=pendaftar_kka_' + new Date().toISOString().split('T')[0] + '.csv',
      },
    });
  } catch (error) {
    console.error('Export error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
