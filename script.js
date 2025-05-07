document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".gallery-track");
  const items = document.querySelectorAll(".gallery-item");
  const leftBtn = document.querySelector(".left-button");
  const rightBtn = document.querySelector(".right-button");

  let currentIndex = 0;
  const totalItems = items.length;

  function updateGallery() {
    const itemWidth = items[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalItems; // looping ke awal
    updateGallery();
  });

  leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // looping ke akhir
    updateGallery();
  });

  window.addEventListener("resize", updateGallery);
  updateGallery(); // jalankan sekali di awal
});
