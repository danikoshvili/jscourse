let count = 0; // Initialize count to 0

// Increment the count and handle related tasks
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the updated count
    checkCountValue(); // Check the count and display alerts if needed
}

// Display the count in the HTML element
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

// Check the count and display alerts for milestones
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}
