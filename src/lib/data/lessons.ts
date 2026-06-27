import { supabase } from "@/lib/supabase/client";

export type Lesson = {
  id: string;
  name: string;
  description: string | null;
  base_price: number;
  age_group: string | null;
  duration_minutes: number | null;
  is_popular: boolean;
  sort_order: number;
};

// Fetches published lessons, ordered. Runs on the server (Server Component).
export async function getLessons(): Promise<Lesson[]> {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to fetch lessons:", error.message);
    return [];
  }
  return data ?? [];
}