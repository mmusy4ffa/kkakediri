import { s as supabase } from './supabase_BQgYTxfM.mjs';

async function getVisions() {
  const { data, error } = await supabase.from("visions").select("*").order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}
async function getVisionCount() {
  const { count, error } = await supabase.from("visions").select("*", { count: "exact", head: true });
  if (error) throw error;
  return count || 0;
}

export { getVisions as a, getVisionCount as g };
