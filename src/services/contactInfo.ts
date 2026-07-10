import { supabase } from '../lib/supabase';

export interface ContactInfo {
  id: number;
  key: string;
  value: string;
  label: string;
  sort_order: number;
  is_active: boolean;
}

export async function getContactInfo(): Promise<ContactInfo[]> {
  const { data, error } = await supabase
    .from('contact_info')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as ContactInfo[];
}

export async function updateContactInfo(id: number, item: Partial<ContactInfo>) {
  const { error } = await supabase.from('contact_info').update(item).eq('id', id);

  if (error) throw error;
}
