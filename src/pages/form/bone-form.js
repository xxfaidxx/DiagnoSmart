export default function BoneForm() {
  const content = document.createElement("div");
  content.innerHTML = `
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Bone Health Prediction</h2>
      <p class="text-gray-700 mb-6">Enter symptoms to get a bone health diagnosis.</p>

      <form id="bone-form">
        <label for="symptom-input">Enter symptoms:</label>
        <input id="symptom-input" class="p-2 border rounded-md w-full mb-4" type="text" placeholder="E.g. pain, swelling, itching" />
        
        <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md">Predict</button>
      </form>

      <div id="result"></div>
    </section>
  `;

  const form = content.querySelector("#bone-form");
  const resultDiv = content.querySelector("#result");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const symptomInput = content.querySelector("#symptom-input");
    const symptoms = symptomInput.value.trim();

    if (!symptoms) {
      resultDiv.innerHTML =
        "<p class='text-red-500'>Please enter symptoms to predict.</p>";
      return;
    }

    const symptomsArray = symptoms.split(",").map((item) => item.trim());

    try {
      const response = await fetch(
        "https://project-production-fa51.up.railway.app/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            symptoms: symptomsArray,
            model_type: "bone",
          }),
          mode: "no-cors",
        }
      );

      console.log("Response status:", response.status);
      const responseText = await response.text();
      console.log("Response text:", responseText);

      if (!response.ok) {
        throw new Error("Failed to fetch prediction.");
      }

      const data = JSON.parse(responseText);
      resultDiv.innerHTML = `<p class="text-green-600">Prediction: ${data.prediction}</p>`;
    } catch (error) {
      resultDiv.innerHTML = `<p class="text-red-500">${error.message}</p>`;
      console.error("Error:", error);
    }
  });

  return content;
}
