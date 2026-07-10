import { supabase } from '../lib/supabase';
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz1C9ilNrSsJaCAKpxltmVMIGzBjAUD92b8iZn5PLQ8U6f8Qq3Q-5pIOBXw_fzdCuZO/exec';

export async function kirimKeGoogleSheets(data: Pendaftar): Promise<void> {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Gagal kirim ke Google Sheets:', error);
  }
}

export interface Pendaftar {
  id: number;
  nama: string;
  email: string;
  no_hp: string;
  asal_sekolah: string;
  jenjang: string;
  region: string;
  tipe_pendaftaran: string;
  invoice_number: string;
  bukti_bayar: string;
  status_admin: string;
  catatan_admin: string;
  created_at: string;
  updated_at: string;
}

export async function getPendaftar(): Promise<Pendaftar[]> {
  const { data, error } = await supabase
    .from('pendaftar')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as Pendaftar[];
}

export async function getPendaftarById(id: number): Promise<Pendaftar | null> {
  const { data, error } = await supabase.from('pendaftar').select('*').eq('id', id).single();

  if (error) return null;
  return data as Pendaftar;
}

export async function getPendaftarByEmail(email: string): Promise<Pendaftar | null> {
  const { data, error } = await supabase
    .from('pendaftar')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error) return null;
  return data as Pendaftar;
}

export async function createPendaftar(
  data: Omit<Pendaftar, 'id' | 'invoice_number' | 'status_admin' | 'created_at' | 'updated_at'>
): Promise<Pendaftar> {
  const { count } = await supabase.from('pendaftar').select('id', { count: 'exact', head: true });

  const invoiceNumber = `KKA2026-${String((count || 0) + 1).padStart(4, '0')}`;

  const { data: result, error } = await supabase
    .from('pendaftar')
    .insert({
      ...data,
      invoice_number: invoiceNumber,
      status_admin: 'pending',
    })
    .select()
    .single();

  if (error) throw error;
  return result as Pendaftar;
}

export async function updatePendaftar(id: number, data: Partial<Pendaftar>): Promise<Pendaftar> {
  const { data: result, error } = await supabase
    .from('pendaftar')
    .update({
      ...data,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return result as Pendaftar;
}

export async function approvePendaftar(id: number): Promise<Pendaftar> {
  const { data: result, error } = await supabase
    .from('pendaftar')
    .update({
      status_admin: 'approved',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return result as Pendaftar;
}

export async function rejectPendaftar(id: number, catatan: string = ''): Promise<Pendaftar> {
  const { data: result, error } = await supabase
    .from('pendaftar')
    .update({
      status_admin: 'rejected',
      catatan_admin: catatan,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return result as Pendaftar;
}

export async function uploadBuktiPendaftar(id: number, url: string): Promise<Pendaftar> {
  const { data: result, error } = await supabase
    .from('pendaftar')
    .update({
      bukti_bayar: url,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return result as Pendaftar;
}

export async function deletePendaftar(id: number): Promise<void> {
  const { error } = await supabase.from('pendaftar').delete().eq('id', id);

  if (error) throw error;
}
