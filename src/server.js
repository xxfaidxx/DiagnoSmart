const Hapi = require("@hapi/hapi");
const axios = require("axios");
const fs = require("fs");
const supabase = require("./supa");

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: "0.0.0.0",
  routes: {
    cors: {
      origin: ["*"],
      credentials: true,
      headers: ["Content-Type", "Authorization"],
    },
  },
});

server.route({
  method: "POST",
  path: "/predict",
  handler: async (request, h) => {
    try {
      const { symptoms, model_type } = request.payload;

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
      }

      const response = await axios.post(
        "https://project-production-fa51.up.railway.app/predict",
        { symptoms, model_type }
      );

      return h.response(response.data).code(200);
    } catch (error) {
      console.error(error);
      return h.response({ error: "Something went wrong!" }).code(500);
    }
  },
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
