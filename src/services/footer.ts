import { supabase } from '../lib/supabase';

export interface Footer {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  sort_order: number;
  is_active: boolean;
}

export async function getFooter(): Promise<Footer[]> {
  const { data, error } = await supabase
    .from('footer')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as Footer[];
}

export async function getFooterItem(id: number): Promise<Footer | null> {
  const { data, error } = await supabase.from('footer').select('*').eq('id', id).single();

  if (error) return null;
  return data as Footer;
}

export async function createFooter(item: Omit<Footer, 'id'>) {
  const { error } = await supabase.from('footer').insert(item);

  if (error) throw error;
}

export async function updateFooter(id: number, item: Partial<Footer>) {
  const { error } = await supabase.from('footer').update(item).eq('id', id);

  if (error) throw error;
}

export async function deleteFooter(id: number) {
  const { error } = await supabase.from('footer').delete().eq('id', id);

  if (error) throw error;
}
