import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import fs from "fs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { symptoms, model_type } = req.body;

    try {
      const dataToSave = { symptoms, model_type, timestamp: new Date() };
      fs.appendFile("data.json", JSON.stringify(dataToSave) + "\n", (err) => {
        if (err) {
          console.error("Error saving data:", err);
        }
      });

      const { data, error } = await supabase
        .from("predictions")
        .insert([{ symptoms, model_type, timestamp: new Date() }]);

      if (error) {
        console.error("Error saving to Supabase:", error);
        return res.status(500).json({ error: "Failed to save to Supabase" });
      }

      const response = await axios.post(
        "https://project-production-fa51.up.railway.app/predict",
        { symptoms, model_type }
      );

      return res.status(200).json(response.data);
    } catch (error) {
      console.error("❌ Error:", error);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
