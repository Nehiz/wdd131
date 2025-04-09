const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple-lds.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-temple.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah-temple.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo_guam_temple.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington_dc_temple.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru-temple.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city-temple.webp"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/salt-lake-temple.webp"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52997,
        imageUrl: "images/tokyo-japan-temple.webp"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.webp"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19100,
        imageUrl: "images/johannesburg-south-africa-temple.webp"
    },
    {
        templeName: "Hong Kong China",
        location: "Kowloon Tong, Hong Kong",
        dedicated: "1996, May, 26",
        area: 21744,
        imageUrl: "images/hong-kong-china-temple.webp"
    }
];

// Function to display temple cards
function displayTemples(templeList) {
    const templeContainer = document.getElementById("temple-cards");
    templeContainer.innerHTML = ""; // Clear existing cards

    templeList.forEach(temple => {
        const card = document.createElement("figure");
        card.className = "temple-card";
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" width="400" height="250" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            </figcaption>
        `;
        templeContainer.appendChild(card);
    });
}

// Function to filter temples based on criteria
function filterTemples(filterType) {
    let filteredTemples = [];
    switch (filterType) {
        case "old":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;
        case "new":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case "home":
        default:
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
}

// Event listeners for navigation links
document.addEventListener("DOMContentLoaded", () => {
    // Display all temples on page load
    displayTemples(temples);

    // Update footer
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            const filterType = link.getAttribute("data-filter");
            filterTemples(filterType);
        });
    });
});