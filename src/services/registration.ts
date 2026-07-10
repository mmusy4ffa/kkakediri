import { supabase } from '../lib/supabase';

export interface Registration {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  sort_order: number;
  is_active: boolean;
}

export async function getRegistrations(): Promise<Registration[]> {
  const { data, error } = await supabase
    .from('registrations')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return (data ?? []) as Registration[];
}

export async function getRegistration(id: number): Promise<Registration | null> {
  const { data, error } = await supabase.from('registrations').select('*').eq('id', id).single();

  if (error) return null;
  return data as Registration;
}

export async function createRegistration(item: Omit<Registration, 'id'>) {
  const { error } = await supabase.from('registrations').insert(item);

  if (error) throw error;
}

export async function updateRegistration(id: number, item: Partial<Registration>) {
  const { error } = await supabase.from('registrations').update(item).eq('id', id);

  if (error) throw error;
}

export async function deleteRegistration(id: number) {
  const { error } = await supabase.from('registrations').delete().eq('id', id);

  if (error) throw error;
}
