export default function createFeedbackForm(onSubmit) {
  const form = document.createElement("form");
  form.className = "space-y-4 bg-white p-4 rounded-xl shadow";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Your Name";
  nameInput.className = "w-full border rounded p-2";
  nameInput.required = true;

  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Your Feedback";
  messageInput.className = "w-full border rounded p-2";
  messageInput.required = true;

  const stars = document.createElement("div");
  stars.className = "flex gap-1";
  let rating = 0;

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.textContent = "☆";
    star.className = "text-2xl cursor-pointer text-yellow-400";
    star.addEventListener("click", () => {
      rating = i;
      [...stars.children].forEach((s, idx) => {
        s.textContent = idx < i ? "★" : "☆";
      });
    });
    stars.appendChild(star);
  }

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  submitBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";

  form.append(nameInput, messageInput, stars, submitBtn);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (rating === 0) return alert("Please give a rating!");
    await onSubmit({
      name: nameInput.value,
      message: messageInput.value,
      rating,
    });
    form.reset();
    rating = 0;
    [...stars.children].forEach((s) => (s.textContent = "☆"));
  });

  return form;
}
