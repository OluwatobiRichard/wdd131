// Grab the hamburger button and the nav menu
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');

// When the button is clicked, show/hide the nav and flip the icon to an X
menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
});


// BMI Calculator
const bmiForm = document.querySelector("#bmiForm");

bmiForm.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the weight and height values
    const weight = Number(document.querySelector("#bmiWeight").value);
    const height = Number(document.querySelector("#bmiHeight").value);

    // Get the result elements
    const resultBox = document.querySelector("#bmiResultBox");
    const bmiScoreText = document.querySelector("#bmiScoreText");
    const bmiCatText = document.querySelector("#bmiCatText");

    // Validate the measurements
    if (weight <= 0 || height <= 0) {
        bmiScoreText.textContent = "--";
        bmiCatText.textContent = "Enter valid measurements";
        resultBox.hidden = false;
        return;
    }

    // Convert height from centimetres to metres
    const heightInMetres = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMetres * heightInMetres);

    // Determine the BMI category for adults
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Healthy weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    // Display the results
    bmiScoreText.textContent = bmi.toFixed(1);
    bmiCatText.textContent = category;

    // Make the result box visible
    resultBox.hidden = false;
});


// Footer year and last-modified date
const year = new Date().getFullYear();
document.getElementById('currentyear').textContent = year;
document.getElementById('lastModified').textContent = document.lastModified;

