// Supabase Configuration for Admin Dashboard (Standalone)
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabaseClient = supabaseClient;


