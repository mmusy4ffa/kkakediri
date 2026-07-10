import { s as supabase } from './supabase_BQgYTxfM.mjs';

async function getHeroes() {
  const { data, error } = await supabase.from("hero_slider").select("*").order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export { getHeroes as g };
