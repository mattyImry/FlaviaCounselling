function sendMail(contactForm) {
    emailjs.send("on_line_psycology", "contact_fcigolla",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "phone": contactForm.phone.value,
        "message": contactForm.message.value,
        "insurances": contactForm.insurances.value,
        
    })
    .then(alert(`Thank you! Your message was sent`));
}