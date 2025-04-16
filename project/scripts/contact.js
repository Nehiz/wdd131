document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        form.style.display = "none"; // Hide the form
        thankYouMessage.style.display = "block"; // Show the thank-you message
    });
});