document.addEventListener("DOMContentLoaded", () => {
    const counterSpan = document.getElementById("review-counter");

    // Get current review count from localStorage
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

    // Increment the counter
    reviewCount += 1;

    // Save the updated count to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Display the counter using template literals
    counterSpan.textContent = `${reviewCount}`;

    // Footer: Display current year and last modified date
    const currentYearSpan = document.getElementById("current-year");
    const lastModifiedSpan = document.getElementById("last-modified");

    // Set current year
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set last modified date
    const lastModified = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModified.toLocaleString();
});