import { s as supabase } from './supabase_BQgYTxfM.mjs';

async function getBlogs() {
  const { data, error } = await supabase.from("blogs").select("*").order("published_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
async function getBlogBySlug(slug) {
  const { data, error } = await supabase.from("blogs").select("*").eq("slug", slug).single();
  if (error) return null;
  return data;
}

export { getBlogs as a, getBlogBySlug as g };
