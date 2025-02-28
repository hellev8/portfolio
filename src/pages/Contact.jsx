import React, { useState } from "react";
import "../styles/Contact.css";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        // Simulate email sending or connect to your backend/API
        setTimeout(() => {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <h1>Contact Me</h1>
                {/*<p>Feel free to reach out for inquiries, collaborations, or just to say hi!</p>*/}
                <p>Just kidding, work in progress!</p>
                <p>This is a draft, see you soon :)</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    {/*<label htmlFor="name">Name</label>*/}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    id="name"*/}
                    {/*    name="name"*/}
                    {/*    value={formData.name}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    required*/}
                    {/*/>*/}

                    {/*<label htmlFor="email">Email</label>*/}
                    {/*<input*/}
                    {/*    type="email"*/}
                    {/*    id="email"*/}
                    {/*    name="email"*/}
                    {/*    value={formData.email}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    required*/}
                    {/*/>*/}

                    {/*<label htmlFor="message">Message</label>*/}
                    {/*<textarea*/}
                    {/*    id="message"*/}
                    {/*    name="message"*/}
                    {/*    rows="5"*/}
                    {/*    value={formData.message}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    required*/}
                    {/*></textarea>*/}

                    {/*<button type="submit" className="submit-btn">Send</button>*/}
                </form>
                {status && <p className="form-status">{status}</p>}
            </div>
        </div>
    );
};

export default Contact;
