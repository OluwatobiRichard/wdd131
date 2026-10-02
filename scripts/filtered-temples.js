// Store the selected elements that we are going to use.
const nav = document.querySelector('#site-nav');
const menu = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show')
    menu.classList.toggle('show', isOpen);
    menu.setAttribute('aria-expanded', isOpen);
});

const year = new Date().getFullYear();
document.getElementById('currentyear').textContent = year;
document.getElementById('lastModified').textContent = document.lastModified;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "7, August, 2005",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "21, May, 1888,",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "7, June, 2015",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2, May, 2020",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "19, November,1974",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "10, January, 1986",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "2, December, 1983",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manaus Brazil Temple",
        location: "Ponta Negra, Brazil",
        dedicated: "20 June 2008",
        area: 32032,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg"
    },
    {
        templeName: "Austin Texas Temple",
        location: "Texas United States",
        dedicated: "17 August 2024",
        area: 30000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-main.jpg"
    }
];

const gallery = document.querySelector(".gallery");

function displayTemples(temples) {
    gallery.innerHTML = "";

    temples.forEach((temple) => {
        const card = document.createElement("section");

        card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName} Temple"
        loading="lazy"
      >
    `;

        gallery.appendChild(card);
    });
}
displayTemples(temples);

//Home Button Display all temples:
document.querySelector('#home').addEventListener('click', () => {
    displayTemples(temples);
})

//Old Temples Built before 1900:
document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter(
        temple => new Date(temple.dedicated).getFullYear() < 1900
    );

    displayTemples(oldTemples);
});


// New Temples Built after 2000:
document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter(
        temple => new Date(temple.dedicated).getFullYear() > 2000
    );

    displayTemples(newTemples);
});

//Large Temples Larger than 90,000 square feet:

document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );

    displayTemples(largeTemples);
});

//Small Temples Smaller than 10,000 square feet:
document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );

    displayTemples(smallTemples);
});