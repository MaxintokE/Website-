
    // Function to handle newsletter subscription
    document.querySelector('#newsletterForm').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        const emailInput = document.querySelector('#Newsletter input[type="email"]'); // Get email input
        const email = emailInput.value; // Get value from input

        if (email) {
            alert(`Thank you for subscribing to our newsletter, ${email}!`);
            emailInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid email address.');
        }
    });


    // Function to handle site visit form submission
    document.querySelector('#visitForm button[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        const visitNameInput = document.querySelector('#visitForm input[placeholder="Your Name"]');
        const visitPhoneInput = document.querySelector('#visitForm input[placeholder="Phone Number"]');
        const visitEmailInput = document.querySelector('#visitForm input[placeholder="Email Address"]');

        const visitName = visitNameInput.value;
        const visitPhone = visitPhoneInput.value;
        const visitEmail = visitEmailInput.value;

        if (visitName && visitPhone && visitEmail) {
            alert(`Thank you, ${visitName}! Your site visit has been scheduled.`);
            visitNameInput.value = ''; // Clear input fields
            visitPhoneInput.value = '';
            visitEmailInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });


    // Function to handle contact form submission
    document.querySelector('#contact button[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        const nameInput = document.querySelector('#contact input[placeholder="Your Name"]');
        const emailInput = document.querySelector('#contact input[placeholder="Your Email"]');
        const messageInput = document.querySelector('#contact textarea[placeholder="Your Message"]');

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            nameInput.value = ''; // Clear input fields
            emailInput.value = '';
            messageInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

