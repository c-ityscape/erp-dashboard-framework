document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.querySelector('.sign-in');

    signInButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get email and password values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (email === '' || password === '') {
            alert('Please enter both email and password.');
            return;
        }

        // Log email and password (for demonstration purposes)
        console.log('Email:', email);
        console.log('Password:', password);

        // Redirect to index1.html after successful login
        // Here, you can add your authentication logic (e.g., API call to your server)
        // For demonstration, we assume login is always successful
        window.location.href = 'index1.html';
    });
});
