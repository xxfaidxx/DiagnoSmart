export default function BoneForm() {
  const content = document.createElement("div");
  content.innerHTML = `
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Bone Health Prediction</h2>
      <p class="text-gray-700 mb-6">Enter symptoms to get a bone health diagnosis.</p>

      <form id="bone-form">
        <label for="symptom-input">Enter symptoms:</label>
        <input id="symptom-input" class="p-2 border rounded-md w-full mb-4" type="text" placeholder="E.g. pain, swelling" />
        
        <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md">Predict</button>
      </form>

      <div id="result"></div>
    </section>
  `;
  return content;
}
