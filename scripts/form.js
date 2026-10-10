const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

const selectOption = document.querySelector('#product');
if (selectOption) {
    products.forEach((product) => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;

        selectOption.appendChild(option);
    });
}

// Get the saved review count from localStorage.
const reviewCountElement = document.querySelector('#reviewCount');
let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

reviewCount++;
localStorage.setItem('reviewCount', reviewCount);
reviewCountElement.textContent = reviewCount;

const year = new Date().getFullYear();
document.getElementById('currentyear').textContent = year;
document.getElementById('lastModified').textContent = document.lastModified;