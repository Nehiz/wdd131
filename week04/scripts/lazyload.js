document.addEventListener("DOMContentLoaded", () => {
    // Get the last modified date of the document
    const lastModified = document.lastModified;
    
    // Update the footer with the last modified date
    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.textContent = lastModified;
});