// Footer: Current Year and Last Modified Date
const currentYear = document.querySelector('#current-year');
const lastModified = document.querySelector('#last-modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Hamburger Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});