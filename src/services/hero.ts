import { supabase } from '../lib/supabase';

export interface Hero {
  id: number;
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  image: string;
  sort_order: number;
  is_active: boolean;
}

export async function getHeroes(): Promise<Hero[]> {
  const { data, error } = await supabase
    .from('hero_slider')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) throw error;

  return (data ?? []) as Hero[];
}

export async function getHero(id: number): Promise<Hero | null> {
  const { data, error } = await supabase.from('hero_slider').select('*').eq('id', id).single();

  if (error) return null;

  return data as Hero;
}

export async function createHero(hero: Omit<Hero, 'id'>) {
  const { error } = await supabase.from('hero_slider').insert(hero);

  if (error) throw error;
}

export async function updateHero(id: number, hero: Partial<Hero>) {
  const { error } = await supabase.from('hero_slider').update(hero).eq('id', id);

  if (error) throw error;
}

export async function deleteHero(id: number) {
  const { error } = await supabase.from('hero_slider').delete().eq('id', id);

  if (error) throw error;
}
