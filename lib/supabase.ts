import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client for browser usage (limited permissions)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server operations (full permissions)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
