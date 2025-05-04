const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
const navbar = document.querySelector(".navbar");
const liveTime = document.getElementById("live-time");

// scroll nav
let lastScrollTop = 0;

// Sidebar toggle
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Close sidebar when clicking outside (optional)
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});

// Hide/Show navbar on scroll
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.top = "-60px"; // Adjust as needed to hide navbar
  } else {
    // Scroll up
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

// Testimonial slider
const testimonialSlides = document.querySelectorAll(".testimonial");
let currentTestimonialSlide = 0;

// Galeri
const galleryContainer = document.querySelector(".gallery-container");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

let currentSlide = 0;
const slideWidth = document.querySelector(".gallery-slider").clientWidth;

// Update live time for Jakarta timezone
function updateLiveTime() {
  const jakartaTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  liveTime.textContent = `Jakarta: ${jakartaTime}`;
}

// Refresh time every second
setInterval(updateLiveTime, 1000);
updateLiveTime();

// Testimonial Slider Controls
function showTestimonial(direction) {
  testimonialSlides[currentTestimonialSlide].classList.remove("active");
  currentTestimonialSlide =
    (currentTestimonialSlide + direction + testimonialSlides.length) %
    testimonialSlides.length;
  testimonialSlides[currentTestimonialSlide].classList.add("active");
}

document.querySelector(".prev").addEventListener("click", () => {
  showTestimonial(-1);
});
document.querySelector(".next").addEventListener("click", () => {
  showTestimonial(1);
});

rightButton.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= galleryContainer.children.length) {
    currentSlide = 0; // Loop back to the first slide
  }
  updateGalleryPosition();
});

leftButton.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = galleryContainer.children.length - 1; // Loop to the last slide
  }
  updateGalleryPosition();
});

function updateGalleryPosition() {
  galleryContainer.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;
}
