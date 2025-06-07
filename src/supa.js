import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mjgktqnmlqxwgccmpspc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZ2t0cW5tbHF4d2djY21wc3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTgyMTksImV4cCI6MjA2MjAzNDIxOX0.vcLoBM9x77l8iyndqhdnKODND2-EWEIhAz3PMw1RO8g";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
