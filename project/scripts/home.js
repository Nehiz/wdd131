document.addEventListener("DOMContentLoaded", () => {
    // Slideshow functionality
    const slides = document.querySelectorAll(".hero-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds
    let slideTimer;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Start automatic slideshow
    function startSlideShow() {
        slideTimer = setInterval(nextSlide, slideInterval);
    }

    // Stop slideshow when interacting manually
    function stopSlideShow() {
        clearInterval(slideTimer);
    }

    // Resume slideshow after manual interaction
    function resumeSlideShow() {
        stopSlideShow();
        startSlideShow();
    }

    // Event listeners for buttons
    prevButton.addEventListener("click", () => {
        prevSlide();
        resumeSlideShow();
    });

    nextButton.addEventListener("click", () => {
        nextSlide();
        resumeSlideShow();
    });

    // Initialize
    showSlide(currentSlide);
    startSlideShow();

    // Quiz functionality
    const quizButtons = document.querySelectorAll(".interactive-quiz button");
    let score = 0;
    const scoreDisplay = document.getElementById("score");

    quizButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "Abacus") {
                score += 1;
                alert("Correct! The abacus is the primary tool in abacus math.");
            } else {
                alert("Wrong! The correct answer is Abacus.");
            }
            scoreDisplay.textContent = `Score: ${score}`;
        });
    });
});