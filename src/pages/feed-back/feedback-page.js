import { getFeedbacks, submitFeedback } from "./supa-feedback.js";
import createFeedbackForm from "./createfeedbackform.js";
import createTestimonialCard from "./testi.js";

export default async function renderFeedbackPage() {
  const wrapper = document.createElement("div");
  wrapper.className =
    "min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10";

  const title = document.createElement("h2");
  title.textContent = "📝Beri Rating dan Masukan Anda";
  title.className = "text-2xl font-bold text-gray-800";

  const feedbackList = document.createElement("div");
  feedbackList.className =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl";

  let currentPage = 1;
  const itemsPerPage = 9;
  let totalFeedbacks = 0;

  async function loadFeedbacks() {
    const data = await getFeedbacks();
    totalFeedbacks = data.length;
    const paginatedData = data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    feedbackList.innerHTML = "";
    paginatedData.forEach((item) => {
      feedbackList.appendChild(createTestimonialCard(item));
    });

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * itemsPerPage >= totalFeedbacks;
  }

  const form = createFeedbackForm(async (data) => {
    await submitFeedback(data);
    loadFeedbacks();
  });

  wrapper.appendChild(title);
  wrapper.appendChild(form);

  const subtitle = document.createElement("h3");
  subtitle.textContent = "💬 Masukan Terbaru";
  subtitle.className = "text-3xl font-bold text-gray-700 mt-10 mb-4";

  wrapper.appendChild(subtitle);
  wrapper.appendChild(feedbackList);

  const pagination = document.createElement("div");
  pagination.className = "flex gap-4 mt-6";

  const prevButton = document.createElement("button");
  prevButton.textContent = "Prev";
  prevButton.disabled = true;
  prevButton.className = "px-4 py-2 text-white rounded cursor-pointer";
  prevButton.style.backgroundColor = "#076ba1";

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = true;
  nextButton.className = "px-4 py-2 text-white rounded cursor-pointer";
  nextButton.style.backgroundColor = "#076ba1";

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      loadFeedbacks();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage * itemsPerPage < totalFeedbacks) {
      currentPage++;
      loadFeedbacks();
    }
  });

  pagination.appendChild(prevButton);
  pagination.appendChild(nextButton);

  wrapper.appendChild(pagination);

  loadFeedbacks();

  return wrapper;
}
