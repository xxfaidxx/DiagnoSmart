import { createClient } from "@supabase/supabase-js";
import fs from "fs";

// Ambil kredensial Supabase dari environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Fungsi untuk menangani request feedback
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Mengambil data dari request body
    const { name, message, rating } = req.body;

    try {
      // Simpan feedback ke dalam file JSON
      const feedbackToSave = { name, message, rating, timestamp: new Date() };
      fs.appendFile(
        "feedback.json",
        JSON.stringify(feedbackToSave) + "\n",
        (err) => {
          if (err) {
            console.error("Error saving feedback to file:", err);
          }
        }
      );

      // Simpan feedback ke dalam Supabase
      const { data, error } = await supabase
        .from("feedback") // Nama tabel feedback Anda
        .insert([{ name, message, rating, created_at: new Date() }]);

      if (error) {
        console.error("Error saving feedback to Supabase:", error);
        return res.status(500).json({ error: "Failed to save feedback" });
      }

      return res
        .status(200)
        .json({ message: "Feedback submitted successfully" });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  } else if (req.method === "GET") {
    try {
      // Ambil feedback dari Supabase
      const { data, error } = await supabase
        .from("feedback") // Nama tabel feedback Anda
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching feedback:", error);
        return res.status(500).json({ error: "Failed to fetch feedback" });
      }

      return res.status(200).json(data); // Mengirim data feedback ke frontend
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  } else {
    // Method selain POST dan GET
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
