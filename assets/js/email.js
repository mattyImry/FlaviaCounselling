console.log('works');

function sendMail(contactForm) {
    emailjs.send("on_line_psycology", "contact_fcigolla",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "more_info": contactForm.message.value,
        
    })
    .then(alert(`Thank you! Your message was sent`));
}