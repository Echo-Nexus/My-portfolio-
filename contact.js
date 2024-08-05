// contact.js

alert("Note :- Fill your right contact details. Thank you.");
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            from_name: formData.get("from_name"),
            email_id: formData.get("email_id"),
            mobile_number: formData.get("mobile_number"),
            message: formData.get("message"),
        };

        emailjs.send("service_9si86up", "template_e35kumt", data)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent successfully!");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Failed to send the message. Please try again.");
            });
    });
});