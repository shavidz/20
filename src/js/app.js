// Function to display the current time
function showTime() {
  const timeElement = document.getElementById('time');

  setInterval(function () {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

// Countdown function
function countdown() {
  const countdownElement = document.getElementById('countdown-text');
  const targetDate = new Date("2025-03-05T20:00:00");

  setInterval(function () {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes remaining until next lecture.`;

    if (timeRemaining <= 0) {
      countdownElement.innerHTML = "The lecture has started!";
    }
  }, 1000);
}

// Start the clock and countdown
showTime();
countdown();

// Slider functionality
function sliderFn() {
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  let currentSlide = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("show-slide");
      } else {
        slide.classList.remove("show-slide");
      }
    });
  }

  function goToNextSlide() {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    renderSlides();
  }

  function goToPreSlide() {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide--;
    }
    renderSlides();
  }

  next.addEventListener("click", goToNextSlide);
  prev.addEventListener("click", goToPreSlide);

  // Set auto change interval
  let slideInterval = setInterval(goToNextSlide, 5000);

  // Stop slider on mouseenter and resume on mouseleave
  const sliderWrapper = document.querySelector(".slider-wrapper");
  sliderWrapper.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  sliderWrapper.addEventListener("mouseleave", () => {
    slideInterval = setInterval(goToNextSlide, 5000);
  });
}

// Initialize slider
sliderFn();
