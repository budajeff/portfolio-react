import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
    const initialFormData = { name: '', emailAddress: '', comments: '' };
    const [formData, setFormData] = useState(initialFormData);
    const [submittedOk, setSubmittedOk] = useState(undefined);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.getElementById("contact-form");
        const data = new FormData(form);
        const response = await fetch(e.target.action, {
            method: e.target.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            setSubmittedOk(true);
            form.reset();
        } else {
            setSubmittedOk(false);
        }
    };

    const form = (
        <div className="contact-form-container">
            <form id="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/mdoyzyjl" method="POST">
                <div className="input-labels">
                    <label labelFor="name">Name</label>
                    <label labelFor="emailAddress">Email Address</label>
                    <label labelFor="comments">Comments</label>
                </div>

                <div className="input-fields">
                    <input
                        id="name"
                        name="name"
                        required="true"
                        value={formData.name}
                        onChange={handleFormChange}
                    ></input>

                    <input
                        id="emailAddress"
                        name="emailAddress"
                        required="true"
                        value={formData.emailAddress}
                        onChange={handleFormChange}
                    ></input>

                    <textarea
                        id="comments"
                        name="comments"
                        required="true"
                        value={formData.comments}
                        onChange={handleFormChange}
                    ></textarea>

                    <button id="submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );

    if (submittedOk === undefined) {
        return form;
    } else if (submittedOk === false) {
        return <p>Oops! Something went wrong!</p>;
    } else {
        return <p>Thanks for your interest!</p>;
    }
}