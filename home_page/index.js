// Immediately show an alert to confirm JavaScript is loading
alert("JavaScript is loading!");

// window.onload setup
window.onload = () => {
    console.log('Page loaded');
    alert("Page fully loaded - buttons should work now!");
    
    // Setup all the button click handlers
    setupButtonHandlers();
}

// API endpoint base URL
const API_BASE_URL = 'http://localhost:5001/api';

// Function to setup all button handlers
function setupButtonHandlers() {
    // Get all tool elements
    const toolElements = document.querySelectorAll('.tools_element');
    console.log("Found tool elements:", toolElements.length);
    
    // Add click event listeners to each tool element
    toolElements.forEach((element, index) => {
        console.log(`Adding click handler to element ${index}`);
        element.addEventListener('click', function() {
            // Get the heading text to identify which button was clicked
            const heading = this.querySelector('h3').textContent;
            console.log(`Clicked on: ${heading}`);
            alert(`You clicked: ${heading}`);
            
            // Handle different buttons
            switch(heading) {
                case 'Schedule':
                    handleScheduleClick();
                    break;
                case 'Journal':
                    handleJournalClick();
                    break;
                case 'Attendance':
                    handleAttendanceClick();
                    break;
                case 'Discipline add/drop':
                    handleAddDropClick();
                    break;
                case 'Registratiion':
                    handleRegistrationClick();
                    break;
                case 'Finances':
                    handleFinancesClick();
                    break;
                case 'Questionaire':
                    handleQuestionnaireClick();
                    break;
                case 'ICP':
                    handleICPClick();
                    break;
                case 'Private data':
                    handlePrivateDataClick();
                    break;
                case 'News':
                    handleNewsClick();
                    break;
                default:
                    console.log('No handler for this button');
            }
        });
    });
    
    // Handle login button
    const headerAccountLink = document.querySelector('.header_account_link');
    if (headerAccountLink) {
        console.log("Found login button");
        headerAccountLink.addEventListener('click', function(e) {
            e.preventDefault();
            handleLoginClick();
        });
    }
}

// Button handlers
function handleScheduleClick() {
    console.log('Fetching schedule data...');
    // Example API call - replace with actual endpoint
    fetch(`${API_BASE_URL}/schedule`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok');
        })
        .then(data => {
            console.log('Schedule data:', data);
            alert('Schedule loaded!');
        })
        .catch(error => {
            console.error('Error fetching schedule:', error);
            alert('Error loading schedule. Backend server might not be running or endpoint not available.');
        });
}

function handleJournalClick() {
    console.log('Fetching journal data...');
    alert('Journal feature clicked. This would connect to the backend.');
}

function handleAttendanceClick() {
    console.log('Fetching attendance data...');
    alert('Attendance feature clicked. This would connect to the backend.');
}

function handleAddDropClick() {
    console.log('Opening add/drop interface...');
    alert('Add/Drop feature clicked. This would connect to the backend.');
}

function handleRegistrationClick() {
    console.log('Opening registration interface...');
    alert('Registration feature clicked. This would connect to the backend.');
}

function handleFinancesClick() {
    console.log('Fetching financial data...');
    alert('Finances feature clicked. This would connect to the backend.');
}

function handleQuestionnaireClick() {
    console.log('Opening questionnaire...');
    alert('Questionnaire feature clicked. This would connect to the backend.');
}

function handleICPClick() {
    console.log('Fetching ICP data...');
    alert('ICP feature clicked. This would connect to the backend.');
}

function handlePrivateDataClick() {
    console.log('Fetching private data...');
    alert('Private Data feature clicked. This would connect to the backend.');
}

function handleNewsClick() {
    console.log('Fetching news...');
    alert('News feature clicked. This would connect to the backend.');
}

function handleLoginClick() {
    console.log('Handling login...');
    // For demo purposes, we'll just show an alert
    // In a real app, this might open a login modal or redirect to a login page
    alert('Login button clicked. This would connect to the authentication endpoint.');
}