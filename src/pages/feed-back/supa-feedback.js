import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wfstjsfhmgrxdnbvwfoh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indmc3Rqc2ZobWdyeGRuYnZ3Zm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNzE3ODksImV4cCI6MjA2NDc0Nzc4OX0.AuWCM71sbod7ii7Bt6q8IfMX56rLolqsQux4CNPiRGU";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getFeedbacks() {
  const { data, error } = await supabase
    .from("feedback")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Gagal ambil feedback:", error);
    return [];
  }

  return data;
}

export async function submitFeedback({ name, message, rating }) {
  const { error } = await supabase
    .from("feedback")
    .insert([{ name, message, rating }]);

  if (error) {
    console.error("❌ Gagal kirim feedback:", error);
    alert("Gagal mengirim feedback.");
  }
}
