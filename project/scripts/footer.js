document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const currentYear = document.getElementById("current-year");
    currentYear.textContent = new Date().getFullYear();

    // Set last modified date
    const lastModified = document.getElementById("last-modified");
    lastModified.textContent = document.lastModified;
});