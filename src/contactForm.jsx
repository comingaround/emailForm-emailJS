import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();
    const [submittedData, setSubmittedData] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_azm4xpq', 'template_yqepsnm', form.current, 'wLz1dKKLXfb-ZWMQO')
            .then((result) => {
                console.log(result.text);
                alert("Form successfully submitted via email!");
                const formData = new FormData(form.current);
                const data = {
                    email: formData.get('email'),
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    country: formData.get('country'),
                    message: formData.get('message')
                };
                setSubmittedData(data);
            }, (error) => {
                console.log(error.text);
                alert("Failed to send form. Please try again.");
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Your e-mail:</label>
                    <input type="email" name="email" placeholder="example@email.com" required />
                </div>
                <div>
                    <label>Your first name:</label>
                    <input type="text" name="firstName" placeholder="John" required />
                </div>
                <div>
                    <label>Your last name:</label>
                    <input type="text" name="lastName" placeholder="Doe" required />
                </div>
                <div>
                    <label>Country:</label>
                    <input type="text" name="country" placeholder="Latvia" required />
                </div>
                <div>
                    <label>Message:</label>
                    <input type="text" name="message" placeholder="Your message" required />
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* {submittedData && (
                <div>
                    <h3>Submitted Information:</h3>
                    <p>Your e-mail: {submittedData.email}</p>
                    <p>Your first name: {submittedData.firstName}</p>
                    <p>Your last name: {submittedData.lastName}</p>
                    <p>Country: {submittedData.country}</p>
                    <p>Message: {submittedData.message}</p>
                </div>
            )} */}
        </div>
    );
};

export default ContactForm;
