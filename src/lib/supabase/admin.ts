import "server-only";
import { createClient } from "@supabase/supabase-js";

// Admin client — uses the service_role key. BYPASSES Row Level Security.
// MUST only ever run on the server. The "server-only" import above will cause
// a build error if this file is ever imported into a client component —
// a deliberate guard rail protecting the master key.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});