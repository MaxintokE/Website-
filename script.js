document.getElementById('contactButton').onclick = function() {
    alert('Thank you for contacting us!');
};

document.getElementById('visitForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    alert(Thank you, ${name}! Your visit has been booked. We will contact you at ${email} or ${phone}.);
    
    // Clear the form
    document.getElementById('visitForm').reset();
};

document.getElementById('newsletterForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const newsletterEmail = document.getElementById('newsletterEmail').value;

    alert(Thank you for subscribing! We'll keep you updated at ${newsletterEmail}.);
    
    // Clear the form
    document.getElementById('newsletterForm').reset();
};