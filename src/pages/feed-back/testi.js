export default function createTestimonialCard({ name, message, rating }) {
  const card = document.createElement("div");
  card.className = `
    relative bg-white p-5 rounded-2xl shadow-lg border-t-4
  `;

  const colors = [
    {
      ring: "ring-yellow-400",
      text: "text-yellow-600",
      border: "border-yellow-400",
    },
    {
      ring: "ring-purple-400",
      text: "text-purple-600",
      border: "border-purple-400",
    },
    { ring: "ring-blue-400", text: "text-blue-600", border: "border-blue-400" },
    { ring: "ring-pink-400", text: "text-pink-600", border: "border-pink-400" },
    {
      ring: "ring-green-400",
      text: "text-green-600",
      border: "border-green-400",
    },
    { ring: "ring-red-400", text: "text-red-600", border: "border-red-400" },
  ];

  const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const color = colors[hash % colors.length];

  card.classList.add(color.border);

  const avatar = document.createElement("div");
  avatar.className = `
    absolute -top-5 left-4 w-10 h-10 rounded-full bg-white
    ring-4 ring-offset-2 ${color.ring}
    flex items-center justify-center ${color.text} font-bold text-sm
  `;
  avatar.textContent = name.charAt(0).toUpperCase();

  const nameEl = document.createElement("h3");
  nameEl.textContent = name;
  nameEl.className =
    "font-semibold text-gray-800 text-base flex items-center gap-2 pt-2";

  const stars = document.createElement("div");
  stars.className = "text-yellow-400 text-lg mt-1";
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    star.textContent = i < rating ? "★" : "☆";
    stars.appendChild(star);
  }

  const messageEl = document.createElement("p");
  messageEl.textContent = message;
  messageEl.className = "italic text-gray-700 mt-2 text-sm";

  card.append(avatar, nameEl, stars, messageEl);
  return card;
}
