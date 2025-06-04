import createFeedbackForm from "./createfeedbackform";
import createTestimonialCard from "./testi";

async function renderFeedbackPage() {
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
    try {
      const res = await fetch("/feedback");
      if (!res.ok) {
        throw new Error("Failed to load feedback data");
      }
      const data = await res.json();
      feedbackList.innerHTML = "";
      data.forEach((item) => {
        feedbackList.appendChild(createTestimonialCard(item));
      });
    } catch (error) {
      console.error("Error loading feedback:", error);
      feedbackList.innerHTML =
        "<p>Failed to load feedback. Please try again later.</p>";
    }
  }

  const form = createFeedbackForm(async (data) => {
    try {
      const res = await fetch("/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to submit feedback");
      }
      loadFeedbacks();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
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

export default renderFeedbackPage;
