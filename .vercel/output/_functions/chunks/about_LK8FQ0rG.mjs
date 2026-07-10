import { s as supabase } from './supabase_BQgYTxfM.mjs';

async function getAbout() {
  const { data, error } = await supabase.from("about").select("*").order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export { getAbout as g };
