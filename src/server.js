const Hapi = require("@hapi/hapi");
const axios = require("axios");

const server = Hapi.server({
  port: 3000,
  host: "localhost",
  routes: {
    cors: {
      origin: ["http://localhost:3250"],
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

      const response = await axios.post(
        "https://project-production-fa51.up.railway.app/predict",
        {
          symptoms: symptoms,
          model_type: model_type,
        }
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
