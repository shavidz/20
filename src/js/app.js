// Function to update the clock every second
function updateClock() {
    const clockElement = document.querySelector("#clock");
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Format time
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Update clock display
    clockElement.textContent = formattedTime;
    clockElement.style.backgroundImage = "url('src/img/საათი.png')";
}

// Set interval to update the clock every second
setInterval(updateClock, 1000);

// Slider function with autoplay and stop on hover
function sliderFn() {
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    let currentSlide = 0;
    let autoSlideInterval;

    // Function to render the current slide
    function renderSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add("show-slide");
            } else {
                slide.classList.remove("show-slide");
            }
        });
    }

    // Function to go to the next slide
    function goToNextSlide() {
        if (currentSlide === slides.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        renderSlides();
    }

    // Function to go to the previous slide
    function goToPreSlide() {
        if (currentSlide === 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide--;
        }
        renderSlides();
    }

    // Function to start automatic sliding every 5 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNextSlide, 5000);
    }

    // Function to stop automatic sliding
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for manual slide navigation
    next.addEventListener("click", goToNextSlide);
    prev.addEventListener("click", goToPreSlide);

    // Event listeners for mouseenter and mouseleave on slider wrapper
    const sliderWrapper = document.querySelector(".slider-wrapper");
    sliderWrapper.addEventListener("mouseenter", stopAutoSlide);
    sliderWrapper.addEventListener("mouseleave", startAutoSlide);

    // Start automatic sliding
    startAutoSlide();
}

sliderFn();
