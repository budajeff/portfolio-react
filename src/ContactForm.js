import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const [submittedOk, setSubmittedOk] = useState(undefined);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.getElementById("contact-form");
        const data = new FormData(form);
        const response = await fetch(e.target.action, {
            method: "POST",
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
                {/* <div className="input-labels">
                    <label labelFor="name">Name</label>
                    <label labelFor="email">Email Address</label>
                    <label labelFor="comments">Comments</label>
                </div> */}

                <div className="input-fields">
                    <input
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>

                    <input
                        id="emailAddress"
                        name="emailAddress"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>

                    <textarea
                        id="comments"
                        name="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
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