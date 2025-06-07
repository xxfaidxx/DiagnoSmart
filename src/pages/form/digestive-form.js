export default function DigestiveForm() {
  const content = document.createElement("div");
  content.innerHTML = `
    <section class="w-full md:w-3/4 mx-auto bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 class="text-2xl font-bold mb-4">Prediksi Penyakit Pencernaan</h2>
      <p class="text-gray-700 mb-3">Pilih gejala untuk mendapat prediksi penyakit pencernaan</p>

      <form id="digestive-form" class="relative">
        <div id="selected-symptoms" class="mb-2 flex flex-wrap gap-2"></div>

        <div class="relative mb-4">
          <input id="symptom-input" class="p-2 border rounded-md w-full" type="text" placeholder="Masukkan Gejala" autocomplete="off" />
        </div>

        <button type="submit" class="text-white py-2 px-4 rounded-md w-full sm:w-auto" style="background-color: #076ba1;">Prediksi</button>
      </form>

      <div id="result" class="mt-4"></div>
    </section>
  `;

  const form = content.querySelector("#digestive-form");
  const resultDiv = content.querySelector("#result");
  const symptomInput = content.querySelector("#symptom-input");
  const selectedSymptomsDiv = content.querySelector("#selected-symptoms");

  const symptomsList = {
    "Nyeri perut": "abdominal_pain",
    "Asam lambung": "acidity",
    "Nyeri dada": "chest_pain",
    Batuk: "cough",
    Dehidrasi: "dehydration",
    Diare: "diarrhoea",
    "Gangguan pencernaan": "indigestion",
    "Gatal dalam tubuh": "internal_itching",
    "Hilang nafsu makan": "loss_of_appetite",
    "Kentut berlebihan": "passage_of_gases",
    "Sakit perut": "stomach_pain",
    "Mata cekung": "sunken_eyes",
    "Luka di lidah": "ulcers_on_tongue",
    Muntah: "vomiting",
  };

  let selectedSymptoms = [];

  function createAutocompleteDropdown(suggestions) {
    const existingDropdown = document.querySelector("#autocomplete-dropdown");
    if (existingDropdown) existingDropdown.remove();

    const dropdown = document.createElement("div");
    dropdown.id = "autocomplete-dropdown";
    dropdown.classList.add(
      "absolute",
      "bg-white",
      "border",
      "w-full",
      "z-10",
      "mt-1",
      "max-h-48",
      "overflow-y-auto",
      "rounded-md",
      "shadow"
    );

    suggestions.forEach((suggestion) => {
      const suggestionDiv = document.createElement("div");
      suggestionDiv.classList.add("p-2", "cursor-pointer", "hover:bg-gray-100");
      suggestionDiv.textContent = suggestion;
      suggestionDiv.addEventListener("click", () => {
        if (!selectedSymptoms.includes(suggestion)) {
          selectedSymptoms.push(suggestion);
          updateSelectedSymptoms();
        }
        dropdown.remove();
        symptomInput.value = "";
      });
      dropdown.appendChild(suggestionDiv);
    });

    const inputWrapper = symptomInput.parentElement;
    inputWrapper.appendChild(dropdown);
  }

  function updateSelectedSymptoms() {
    selectedSymptomsDiv.innerHTML = selectedSymptoms
      .map(
        (symptom) => ` 
    <span class="p-1 text-white rounded-md inline-flex items-center" style="background-color: #076ba1;">
      ${symptom}
      <span class="ml-2 cursor-pointer text-white font-bold" data-symptom="${symptom}">×</span>
    </span>`
      )
      .join("");

    const removeButtons =
      selectedSymptomsDiv.querySelectorAll("span[data-symptom]");
    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const symptomToRemove = button.getAttribute("data-symptom");
        selectedSymptoms = selectedSymptoms.filter(
          (s) => s !== symptomToRemove
        );
        updateSelectedSymptoms();
      });
    });
  }

  function handleAutocomplete() {
    const query = symptomInput.value.toLowerCase();
    const filteredSymptoms = Object.keys(symptomsList).filter((symptom) =>
      symptom.toLowerCase().includes(query)
    );

    if (filteredSymptoms.length > 0) {
      createAutocompleteDropdown(filteredSymptoms);
    } else {
      const existingDropdown = document.querySelector("#autocomplete-dropdown");
      if (existingDropdown) existingDropdown.remove();
    }
  }

  symptomInput.addEventListener("focus", handleAutocomplete);
  symptomInput.addEventListener("input", handleAutocomplete);

  document.addEventListener("click", function (event) {
    setTimeout(() => {
      const dropdown = document.querySelector("#autocomplete-dropdown");

      if (
        dropdown &&
        !symptomInput.contains(event.target) &&
        !dropdown.contains(event.target)
      ) {
        dropdown.remove();
      }
    }, 10000);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (selectedSymptoms.length === 0) {
      resultDiv.innerHTML =
        "<p class='text-red-500'>Pilih gejala terlebih dahulu.</p>";
      return;
    }

    try {
      const response = await fetch(
        "https://project-production-fa51.up.railway.app/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            symptoms: selectedSymptoms,
            model_type: "general",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch prediction.");
      }

      const data = await response.json();
      resultDiv.innerHTML = `
        <div class="p-4 border rounded-md bg-green-50">
          <h3 class="text-lg font-semibold text-green-700 mb-2">Prediksi Penyakit: ${
            data.prediction
          }</h3>
          <p class="text-gray-800 mb-4">${
            data.description || "No description available."
          }</p>
          ${
            data.precautions && data.precautions.length
              ? `<h4 class="font-medium text-green-700 mb-1">Pencegahan:</h4>
                 <ul class="list-disc list-inside text-gray-700">
                   ${data.precautions
                     .map((item) => `<li>${item}</li>`)
                     .join("")}
                 </ul>`
              : ""
          }
      <div class="mt-4 p-3 bg-white border border-gray-200 rounded-md shadow-sm text-center">
        <p class="text-gray-800 mb-4">
          Lebih baik mencegah daripada mengobati, segera periksa jika kondisi memburuk. <br>
          Kami harap informasi ini membantu Anda. Jika berkenan, silakan berikan penilaian atau masukan Anda!
        </p>
        <div class="flex justify-center">
          <a href="#/feedback"
            class="text-white px-4 py-2 rounded-md transition hover:opacity-90"
            style="background-color: #076ba1;">
            Berikan Rating & Masukan
          </a>
        </div>
      </div>

      `;
    } catch (error) {
      resultDiv.innerHTML = `<p class="text-red-500">${error.message}</p>`;
    }
  });

  return content;
}
