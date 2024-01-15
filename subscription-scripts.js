// JavaScript for the Subscription Page

// Function to check if the user is subscribed
function isSubscribed(email) {
    // Retrieve subscription data from local storage
    var subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];

    // Check if the email is in the subscriptions list
    return subscriptions.some(function (subscription) {
        return subscription.email === email;
    });
}

// Function to handle form submission
function submitSubscription(event) {
    event.preventDefault();

    // Get form elements
    var emailInput = document.getElementById('email');

    // Validate form inputs
    if (!emailInput.value) {
        alert('Please enter your email address.');
        return;
    }

    // Check if the user is subscribed
    if (isSubscribed(emailInput.value)) {
        // Allow access or redirect to the main page
        window.location.href = 'website.html';
    } else {
        // Display a message for new subscriptions
        alert('Thank you for subscribing! You now have access to the website.');

        // Add the new subscription to local storage
        addSubscription(emailInput.value);

        // Redirect to the main page
        window.location.href = 'website.html';
    }
}

// Function to add a new subscription to local storage
function addSubscription(email) {
    // Retrieve existing subscriptions from local storage
    var subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];

    // Add the new subscription to the list
    subscriptions.push({
        email: email
    });

    // Save the updated subscriptions list to local storage
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
}

// Event listener for form submission
document.getElementById('subscriptionForm').addEventListener('submit', submitSubscription);
