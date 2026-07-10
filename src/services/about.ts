import { supabase } from '../lib/supabase';

export interface About {
  id: number;
  title: string;
  description: string;
  image: string;
  sort_order: number;
  is_active: boolean;
}

export async function getAbout(): Promise<About[]> {
  const { data, error } = await supabase
    .from('about')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as About[];
}

export async function getAboutItem(id: number): Promise<About | null> {
  const { data, error } = await supabase.from('about').select('*').eq('id', id).single();

  if (error) return null;
  return data as About;
}

export async function createAbout(item: Omit<About, 'id'>) {
  const { error } = await supabase.from('about').insert(item);

  if (error) throw error;
}

export async function updateAbout(id: number, item: Partial<About>) {
  const { error } = await supabase.from('about').update(item).eq('id', id);

  if (error) throw error;
}

export async function deleteAbout(id: number) {
  const { error } = await supabase.from('about').delete().eq('id', id);

  if (error) throw error;
}
