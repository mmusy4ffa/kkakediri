import { supabase } from '../lib/supabase';

export interface Gallery {
  id: number;
  title: string;
  description: string;
  image: string;
  sort_order: number;
  is_active: boolean;
}

export async function getGalleries(): Promise<Gallery[]> {
  const { data, error } = await supabase
    .from('galleries')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as Gallery[];
}

export async function getGallery(id: number): Promise<Gallery | null> {
  const { data, error } = await supabase.from('galleries').select('*').eq('id', id).single();

  if (error) return null;
  return data as Gallery;
}

export async function createGallery(item: Omit<Gallery, 'id'>) {
  const { error } = await supabase.from('galleries').insert(item);

  if (error) throw error;
}

export async function updateGallery(id: number, item: Partial<Gallery>) {
  const { error } = await supabase.from('galleries').update(item).eq('id', id);

  if (error) throw error;
}

export async function deleteGallery(id: number) {
  const { error } = await supabase.from('galleries').delete().eq('id', id);

  if (error) throw error;
}
