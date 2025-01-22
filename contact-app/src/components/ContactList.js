import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const getSearchTerm = (e) => {
        props.searchKeyword(e.target.value);
    };

    const renderContactList = props.contacts.map((contact) => (
        <ContactCard
            contact={contact}
            clickHandler={props.getContactId}
            key={contact.id}
        />
    ));

    return (
        <div className="main">
            <h2>
                Contact List
                <div style={{ float: "right" }}>
                    <Link to="/add">
                        <button className="ui button blue">Add Contact</button>
                    </Link>
                </div>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        type="text"
                        placeholder="Search Contacts"
                        className="prompt"
                        value={props.term}
                        onChange={getSearchTerm}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList : <p>No Contacts available</p>}
            </div>
        </div>
    );
};

ContactList.defaultProps = {
    contacts: [],
};

export default ContactList;
