import { supabase } from '../lib/supabase';

export interface Vision {
  id: number;
  title: string;
  description: string;
  sort_order: number;
  is_active: boolean;
}

export async function getVisions(): Promise<Vision[]> {
  const { data, error } = await supabase
    .from('visions')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as Vision[];
}

export async function getVision(id: number): Promise<Vision | null> {
  const { data, error } = await supabase.from('visions').select('*').eq('id', id).single();

  if (error) return null;
  return data as Vision;
}

export async function createVision(vision: Omit<Vision, 'id'>) {
  const { error } = await supabase.from('visions').insert(vision);

  if (error) throw error;
}

export async function updateVision(id: number, vision: Partial<Vision>) {
  const { error } = await supabase.from('visions').update(vision).eq('id', id);

  if (error) throw error;
}

export async function deleteVision(id: number) {
  const { error } = await supabase.from('visions').delete().eq('id', id);

  if (error) throw error;
}

export async function getVisionCount(): Promise<number> {
  const { count, error } = await supabase
    .from('visions')
    .select('*', { count: 'exact', head: true });

  if (error) throw error;
  return count || 0;
}
