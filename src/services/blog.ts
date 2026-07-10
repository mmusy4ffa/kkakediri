import { supabase } from '../lib/supabase';

export interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  published_at: string;
  is_active: boolean;
}

export async function getBlogs(): Promise<Blog[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as Blog[];
}

export async function getBlog(id: number): Promise<Blog | null> {
  const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();

  if (error) return null;
  return data as Blog;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase.from('blogs').select('*').eq('slug', slug).single();

  if (error) return null;
  return data as Blog;
}

export async function createBlog(item: Omit<Blog, 'id'>) {
  const { error } = await supabase.from('blogs').insert(item);

  if (error) throw error;
}

export async function updateBlog(id: number, item: Partial<Blog>) {
  const { error } = await supabase.from('blogs').update(item).eq('id', id);

  if (error) throw error;
}

export async function deleteBlog(id: number) {
  const { error } = await supabase.from('blogs').delete().eq('id', id);

  if (error) throw error;
}
