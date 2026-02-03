// exp4.js

// Function 1: Handle Form Submission
function handleFormSubmit(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault(); 
    
    // Get the value from the name input field
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;

    // Display a message using an alert
    if(nameValue) {
        alert("Thank you, " + nameValue + "! Your message has been received.");
    } else {
        alert("Please enter your name.");
    }
}

// Function 2: Toggle Skills Section Visibility
function toggleSkills() {
    const skillsList = document.querySelector('#skills ul');
    const toggleBtn = document.getElementById('toggleSkillsBtn');

    // Check current display state and toggle it
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleBtn.textContent = 'Hide Skills'; // Change button text
    } else {
        skillsList.style.display = 'none';
        toggleBtn.textContent = 'Show Skills'; // Change button text
    }
}

// Event Listeners: Attach functions to HTML elements after the page loads
document.addEventListener('DOMContentLoaded', function() {
    
    // Attach listener to the Contact Form
    const contactForm = document.querySelector('section#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Attach listener to the Toggle Button
    const toggleBtn = document.getElementById('toggleSkillsBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleSkills);
    }
});