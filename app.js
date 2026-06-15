const bookingButton = document.querySelector(".booking button");
const hero = document.querySelector(".hero");

bookingButton?.addEventListener("click", () => {
  const initialText = bookingButton.textContent;
  bookingButton.textContent = "Заявка в демо отправлена";
  bookingButton.classList.add("is-sent");

  window.setTimeout(() => {
    bookingButton.textContent = initialText;
    bookingButton.classList.remove("is-sent");
  }, 2600);
});

window.addEventListener(
  "scroll",
  () => {
    if (!hero) return;
    const offset = Math.min(window.scrollY * 0.14, 80);
    hero.style.setProperty("--hero-shift", `${offset}px`);
  },
  { passive: true }
);
