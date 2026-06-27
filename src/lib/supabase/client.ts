import { createClient } from "@supabase/supabase-js";

// Public client — uses the anon key. Safe to use anywhere (server or browser).
// Permissions are enforced by Row Level Security (RLS) policies in the database.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);