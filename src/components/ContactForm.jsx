import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c9yl05b', 'template_t32wud8', form.current, 'YsY3sEEjKOFY8LyPl')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                window.alert("Message Sent!")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className="neu-btn"/>
        </form>
    );
};


export default ContactUs;