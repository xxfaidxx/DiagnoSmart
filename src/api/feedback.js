import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, message, rating } = req.body;

    try {
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

      const { data, error } = await supabase
        .from("feedback")
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
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching feedback:", error);
        return res.status(500).json({ error: "Failed to fetch feedback" });
      }

      return res.status(200).json(data);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
