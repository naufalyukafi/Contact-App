import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

export type Contact = {
  name: string
  phone: string
}

function App() {
  
  const [contacts, setContacts] = React.useState<Contact[]>([
    {
      name: "Naufal",
      phone: "085345345"
    },
    {
      name: "Yukafi",
      phone: "08534536"
    }
  ])

  const handleContactAdd = (contact:Contact) => {
    setContacts((prev) => [...prev, contact]);
  }

  const handleContactDelete = (deleteIndex:number) => {
    setContacts((prev) => prev.filter((_, index) => index !== deleteIndex));
  };
  

  return (
    <div>
      <h1 style={{ textAlign: "center", color:"#134f5c"}}>CONTACT APP</h1>
      <ContactForm
       onSubmit={handleContactAdd} />
      <ContactList
        contacts = {contacts} 
        onDeleteButtonClick = {handleContactDelete}
     />

    </div>
  );
}

export default App;
