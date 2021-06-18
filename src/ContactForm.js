import React from "react";
import "./ContactForm.css";

export default function ContactForm() {

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className="contact-form-container">
            <form id="contact-form" onSubmit="handleSubmit">
                <div className="input-labels">
                    <label labelFor="name">Name</label>
                    <label labelFor="email">Email Address</label>
                    <label labelFor="comments">Comments</label>
                </div>
                <div className="input-fields">
                    <input id="name"></input>
                    <input id="emailAddress"></input>
                    <textarea id="comments"></textarea>
                    <button id="submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}