// JavaScript for the Review Page

// Function to handle form submission
function submitReview(event) {
    event.preventDefault();

    // Get form elements
    var nameInput = document.getElementById('name');
    var ratingSelect = document.getElementById('rating');
    var commentTextarea = document.getElementById('comment');

    // Validate form inputs
    if (!nameInput.value || !ratingSelect.value || !commentTextarea.value) {
        alert('Please fill in all fields.');
        return;
    }

    // Display a thank you message
    alert('Thank you for your review!');

    // Create a new review object
    var review = {
        name: nameInput.value,
        rating: ratingSelect.value,
        comment: commentTextarea.value
    };

    // Save the review to local storage
    saveReview(review);

    // Redirect to subscription.html after 2 seconds
    setTimeout(function () {
        window.location.href = 'website.html';
    }, 2000);
}

// Function to save a review to local storage
function saveReview(review) {
    // Retrieve existing reviews from local storage
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Add the new review to the list
    reviews.push(review);

    // Save the updated reviews list to local storage
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Event listener for form submission
document.getElementById('reviewForm').addEventListener('submit', submitReview);
