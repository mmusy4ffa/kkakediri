import { supabase } from '../lib/supabase';

export interface Statistic {
  id: number;
  key: string;
  value: string;
  label: string;
  sort_order: number;
  is_active: boolean;
}

export async function getStatistics(): Promise<Statistic[]> {
  const { data, error } = await supabase
    .from('statistics')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as Statistic[];
}

export async function updateStatistic(id: number, item: Partial<Statistic>) {
  const { error } = await supabase.from('statistics').update(item).eq('id', id);

  if (error) throw error;
}
