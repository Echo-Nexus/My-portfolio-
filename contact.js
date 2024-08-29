alert("Note :- Fill your right contact details to hire me otherwise you will be ignored. Thank you.");
(function() {
    emailjs.init("MR5ZB6Bd0v13HEG2C");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        from_name: document.getElementById('from_name').value,
        email_id: document.getElementById('email_id').value,
        mobile_number: document.getElementById('mobile_number').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_9si86up', 'template_e35kumt', templateParams)
        .then(function(response) {
            document.getElementById('status').textContent = 'Message sent successfully!';
            document.getElementById('status').style.color = 'green';
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('status').textContent = 'Failed to send message. Please try again later.';
            document.getElementById('status').style.color = 'red';
        });
});
