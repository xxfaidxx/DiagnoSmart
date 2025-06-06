import { getFeedbacks, submitFeedback } from "./supa-feedback";
import createFeedbackForm from "./createFeedbackForm";
import createTestimonialCard from "./testi";

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

  async function loadFeedbacks() {
    const data = await getFeedbacks();
    feedbackList.innerHTML = "";
    data.forEach((item) => {
      feedbackList.appendChild(createTestimonialCard(item));
    });
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

  loadFeedbacks();

  return wrapper;
}
