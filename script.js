// Hiệu ứng gõ chữ ở phần Hero
const text = "Computer Science Student";
const el = document.getElementById("typing");
let i = 0;
(function type(){
  if (i <= text.length) { el.textContent = text.slice(0, i++); setTimeout(type, 90); }
})();

// Form liên hệ (GitHub Pages không có backend → mở ứng dụng email)
const EMAIL = "your-email@example.com"; // <-- đổi thành email của bạn
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const n = document.getElementById("name").value;
  const em = document.getElementById("email").value;
  const m = document.getElementById("message").value;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Message from " + n)}&body=${encodeURIComponent(m + "\n\nFrom: " + n + " (" + em + ")")}`;
  e.target.reset();
});
