// Get the form, birthdate input, calculate button, and age result elements
const form = document.getElementById('age-form');
const birthdateInput = document.getElementById('birthdate');
const calculateBtn = document.getElementById('calculate-btn');
const ageResult = document.getElementById('age-result');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the birthdate from the input value
    const birthdate = new Date(birthdateInput.value);

    // Get the current date
    const today = new Date();

    // Calculate the age using the calculateAge function
    const age = calculateAge(birthdate, today);

    // Display the age result
    ageResult.textContent = `You are ${age} years old.`;
});

/**
 * Calculates the age based on the birthdate and current date.
 * 
 * @param {Date} birthdate The birthdate.
 * @param {Date} today The current date.
 * @returns {number} The age.
 */
function calculateAge(birthdate, today) {
    // Calculate the age by subtracting the birth year from the current year
    let age = today.getFullYear() - birthdate.getFullYear();

    // Calculate the month difference
    const monthDiff = today.getMonth() - birthdate.getMonth();

    // If the month difference is negative or the month is the same but the day is less than the birth day, decrement the age
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    // Return the calculated age
    return age;
}