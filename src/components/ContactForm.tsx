import React from "react"
import { string, object } from "prop-types";
import { Contact } from "../App";


const ContactForm = (props:{onSubmit:(contact:Contact) => void}) => {
    const [name, setName] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");
    const handleContactName = (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
   
    const handleContactPhone = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value)
    }
    const handleChangeButton = () => {
        props.onSubmit({name, phone })
        setName("")
        setPhone("")
    }
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="contact name"
                    value={name}
                    onChange={handleContactName}
                    style={{
                        width: "50%",
                        padding: "12px 20px",
                        margin: "8px 8px",
                        display: "inline-block",
                        border: "1px solid #134f5c",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                        outline: "none"
                    }}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="contact phone"
                    value={phone}
                    onChange={handleContactPhone}
                    style={{
                        width: "50%",
                        padding: "12px 20px",
                        margin: "8px 8px",
                        display: "inline-block",
                        border: "1px solid #134f5c",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                        outline: "none"
                    }}
                />
            </div>
            <button
            onClick={handleChangeButton}
             style={{
                width: "50%",
                backgroundColor: "#134f5c",
                color: "white",
                padding: "12px 20px",
                margin: "8px 8px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                outline: "none"
            }}
            >Klik</button>
        </div>
    )
}

export default ContactForm;