import supabase from "../../supa";

export default function GeneralDisease() {
  const content = document.createElement("div");
  content.innerHTML = `
    <section class="w-full md:w-3/4 mx-auto bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 class="text-2xl font-bold mb-4">Prediksi Penyakit Umum</h2>
      <p class="text-gray-700 mb-3">Pilih gejala untuk mendapat prediksi penyakit umum</p>

      <form id="general-form" class="relative">
        <div id="selected-symptoms" class="mb-2 flex flex-wrap gap-2"></div>

        <div class="relative mb-4">
          <input id="symptom-input" class="p-2 border rounded-md w-full" type="text" placeholder="Masukkan Setidaknya 2 Gejala" autocomplete="off" />
        </div>

        <button type="submit" class="text-white py-2 px-4 rounded-md w-full sm:w-auto" style="background-color: #076ba1;">Prediksi</button>
      </form>

      <div id="result" class="mt-4"></div>
    </section>
  `;

  const form = content.querySelector("#general-form");
  const resultDiv = content.querySelector("#result");
  const symptomInput = content.querySelector("#symptom-input");
  const selectedSymptomsDiv = content.querySelector("#selected-symptoms");

  const symptomsList = {
    "Nyeri perut": "abdominal_pain",
    "Asam lambung": "acidity",
    "Gangguan kesadaran": "altered_sensorium",
    "Sakit punggung": "back_pain",
    "Nyeri perut bagian bawah": "belly_pain",
    "Ketidaknyamanan kandung kemih": "bladder_discomfort",
    "Darah dalam dahak": "blood_in_sputum",
    "Penglihatan kabur dan berubah": "blurred_and_distorted_vision",
    "Sulit bernafas": "breathlessness",
    Memar: "bruising",
    "Nyeri saat buang air kecil": "burning_micturition",
    "Nyeri dada": "chest_pain",
    Menggigil: "chills",
    "Hidung tersumbat": "congestion",
    "Susah buang air besar": "constipation",
    "Sering ingin buang air kecil": "continuous_feel_of_urine",
    "Bersin terus menerus": "continuous_sneezing",
    Batuk: "cough",
    "Kram otot": "cramps",
    "Rasa sedih": "depression",
    Diare: "diarrhoea",
    "Lapar berlebihan": "excessive_hunger",
    "Riwayat penyakit keluarga": "family_history",
    "Detak jantung cepat": "fast_heart_rate",
    "Rasa lelah": "fatigue",
    "Bau urin yang tidak sedap": "foul_smell_of urine",
    "Sakit kepala": "headache",
    "Demam tinggi": "high_fever",
    "Gangguan pencernaan": "indigestion",
    "Mudah marah": "irritability",
    "Nyeri sendi": "joint_pain",
    "Kehilangan nafsu makan": "loss_of_appetite",
    "Hilang penciuman": "loss_of_smell",
    "Tidak enak badan": "malaise",
    "Demam ringan": "mild_fever",
    "Dahak lendir": "mucoid_sputum",
    "Nyeri otot": "muscle_pain",
    Mual: "nausea",
    "Kelebihan berat badan": "obesity",
    "Sakit di belakang mata": "pain_behind_the_eyes",
    Berdahak: "phlegm",
    "Pembuluh darah betis menonjol": "prominent_veins_on_calf",
    "Bintik merah di tubuh": "red_spots_over_body",
    "Mata merah": "redness_of_eyes",
    "Hidung meler": "runny_nose",
    "Dahak berwarna coklat kemerahan": "rusty_sputum",
    "Menggigil hebat": "shivering",
    "Tekanan pada sinus": "sinus_pressure",
    "Ruam kulit": "skin_rash",
    "Leher terasa kaku": "stiff_neck",
    "Keringat berlebihan": "sweating",
    "Pembengkakan kelenjar getah bening": "swelled_lymph_nodes",
    "Pembuluh darah bengkak": "swollen_blood_vessels",
    "Kaki membengkak": "swollen_legs",
    "Iritasi pada tenggorokan": "throat_irritation",
    "Tanda toksik (typhos)": "toxic_look_(typhos)",
    "Penglihatan terganggu": "visual_disturbances",
    Muntah: "vomiting",
    "Mata berair": "watering_from_eyes",
    "Kelemahan satu sisi tubuh": "weakness_of_one_body_side",
    "Penurunan berat badan": "weight_loss",
    "Mata menguning": "yellowing_of_eyes",
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
    const dropdown = document.querySelector("#autocomplete-dropdown");
    if (
      dropdown &&
      !symptomInput.contains(event.target) &&
      !dropdown.contains(event.target)
    ) {
      dropdown.remove();
    }
  });

  symptomInput.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (selectedSymptoms.length < 2) {
      resultDiv.innerHTML =
        "<p class='text-red-500'>Pilih setidaknya dua gejala.</p>";
      return;
    }

    try {
      const response = await fetch(
        "https://diagnosmartml-production.up.railway.app/predict",
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

      const { data: insertedData, error } = await supabase
        .from("predictions")
        .insert([
          {
            symptoms: selectedSymptoms,
            model_type: "general",
            prediction: data.prediction,
          },
        ]);

      if (error) {
        throw new Error(error.message);
      }

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
                 ${data.precautions.map((item) => `<li>${item}</li>`).join("")}
               </ul>`
            : ""
        }
        <div class="mt-4 p-3 bg-white border border-gray-200 rounded-md shadow-sm text-center">
          <p class="text-gray-800 mb-4">
            Lebih baik mencegah daripada mengobati, segera periksa jika kondisi memburuk. <br>
            Kami harap informasi ini membantu Anda. Jika berkenan, silakan berikan penilaian atau masukan Anda yang akan membantu kami meningkatkan kualitas layanan kami.
          </p>
          <div class="flex justify-center">
            <a href="#/feedback" class="text-white px-4 py-2 rounded-md transition hover:opacity-90" style="background-color: #076ba1;">
              Berikan Rating & Masukan
            </a>
          </div>
        </div>
      </div>
    `;
    } catch (error) {
      resultDiv.innerHTML = `<p class="text-red-500">${error.message}</p>`;
    }
  });

  return content;
}
