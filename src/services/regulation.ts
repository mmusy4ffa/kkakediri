import { supabase } from '../lib/supabase';

export interface Regulation {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  sort_order: number;
  is_active: boolean;
}

export async function getRegulations(): Promise<Regulation[]> {
  const { data, error } = await supabase
    .from('regulations')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as Regulation[];
}

export async function getRegulation(id: number): Promise<Regulation | null> {
  const { data, error } = await supabase.from('regulations').select('*').eq('id', id).single();

  if (error) return null;
  return data as Regulation;
}

export async function createRegulation(item: Omit<Regulation, 'id'>) {
  const { error } = await supabase.from('regulations').insert(item);

  if (error) throw error;
}

export async function updateRegulation(id: number, item: Partial<Regulation>) {
  const { error } = await supabase.from('regulations').update(item).eq('id', id);

  if (error) throw error;
}

export async function deleteRegulation(id: number) {
  const { error } = await supabase.from('regulations').delete().eq('id', id);

  if (error) throw error;
}
