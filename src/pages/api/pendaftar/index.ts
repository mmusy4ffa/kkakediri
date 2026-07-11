import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

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

    const { data: existing } = await supabaseServer
      .from('pendaftar')
      .select('email')
      .eq('email', email)
      .maybeSingle();

    if (existing) {
      return new Response(JSON.stringify({ error: 'Email sudah terdaftar' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data: settings } = await supabaseServer
      .from('settings')
      .select('key, value')
      .in('key', ['biaya_sd', 'biaya_smp', 'biaya_sma', 'rekening']);

    const settingMap: Record<string, string> = {};
    settings?.forEach((s) => {
      settingMap[s.key] = s.value;
    });

    const biayaMap: Record<string, number> = {
      'SD/MI': Number(settingMap['biaya_sd'] || 25000),
      'SMP/MTs': Number(settingMap['biaya_smp'] || 35000),
      'SMA/MA/SMK': Number(settingMap['biaya_sma'] || 50000),
    };

    const biaya = biayaMap[jenjang] || 0;
    const rekening = settingMap['rekening'] || 'Bank BNI 1234567890 a.n. Panitia KKA';

    const { data: invoiceData, error: invoiceError } =
      await supabaseServer.rpc('generate_invoice_number');

    if (invoiceError || !invoiceData) {
      return new Response(JSON.stringify({ error: 'Gagal generate invoice number' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const invoiceNumber = invoiceData as string;

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
        invoice_number: invoiceNumber,
        biaya: biaya,
        rekening: rekening,
        status_admin: 'pending',
      })
      .select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data: data?.[0] }), {
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
