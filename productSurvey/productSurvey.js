function submitFeedback() {
    // Collect input values
    const username = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const job = document.getElementById('job').value.trim();
    const designation = document.getElementById('designation').value.trim();
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value.trim();

    // Validate inputs
    if (!username || !age || !email || !job || !designation || !feedback) {
        alert('Please fill out all fields before submitting your feedback.');
        return;
    }

    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    // Display feedback
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Show user info section
    document.getElementById('userInfo').style.display = 'block';

    // Show success message
    alert('Thank you for your valuable feedback!');
}

// Attach the click event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', submitFeedback);

// Allow submitting feedback with the Enter key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
