import React from 'react';
import { Contact } from '../App';

const ContactList = (props: { onDeleteButtonClick: (index: number) => void, contacts: Contact[] }) => {
    return (
        <div>
            {props.contacts.map((contact, index) => (
                <div style={{
                    margin: "10px 15px",
                    border: "1px solid #134f5c",
                    maxWidth: "50%",
                    padding: "8px",
                    borderRadius: "5px"
                }}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                    <button
                        onClick={() => props.onDeleteButtonClick(index)}
                        style={{
                            backgroundColor: "#134f5c",
                            color: "white",
                            borderRadius: "8px",
                            cursor: "pointer",
                            outline: "none",
                            padding: "10px"
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
