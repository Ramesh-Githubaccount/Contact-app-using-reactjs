import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get contact data from location state
    const { id, name, email } = location.state.contact;

    // Local state for form inputs
    const [contact, setContact] = useState({ id, name, email });

    const update = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "") {
            alert("All fields are mandatory!");
            return;
        }
        updateContactHandler(contact); // Call handler from parent
        navigate("/"); // Redirect to the contact list
    };

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    />
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    );
};

export default EditContact;
