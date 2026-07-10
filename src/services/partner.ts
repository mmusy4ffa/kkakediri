import { supabase } from '../lib/supabase';

export interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
  sort_order: number;
  is_active: boolean;
}

export async function getPartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as Partner[];
}

export async function getPartner(id: number): Promise<Partner | null> {
  const { data, error } = await supabase.from('partners').select('*').eq('id', id).single();

  if (error) return null;
  return data as Partner;
}

export async function createPartner(item: Omit<Partner, 'id'>) {
  const { error } = await supabase.from('partners').insert(item);

  if (error) throw error;
}

export async function updatePartner(id: number, item: Partial<Partner>) {
  const { error } = await supabase.from('partners').update(item).eq('id', id);

  if (error) throw error;
}

export async function deletePartner(id: number) {
  const { error } = await supabase.from('partners').delete().eq('id', id);

  if (error) throw error;
}
