import { supabase } from '../lib/supabase';

export interface Setting {
  id: number;
  key: string;
  value: string;
  label: string;
}

export async function getSettings(): Promise<Setting[]> {
  const { data, error } = await supabase
    .from('settings')
    .select('*')
    .order('id', { ascending: true });

  if (error) throw error;
  return (data ?? []) as Setting[];
}

export async function getSetting(key: string): Promise<string | null> {
  const { data, error } = await supabase.from('settings').select('value').eq('key', key).single();

  if (error) return null;
  return data?.value || null;
}

export async function updateSetting(key: string, value: string): Promise<void> {
  const { error } = await supabase.from('settings').update({ value }).eq('key', key);

  if (error) throw error;
}
