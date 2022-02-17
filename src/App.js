import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { AppContainer, Title } from "./App.styled";
import useLocalStorage from 'hooks/useLocalStorage';
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";



export default function App () {
  const [contacts, setContacts] = useLocalStorage('contact', []);
  const [filter, setFilter] = useState('');

  

  const addContact = ( name, number ) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(contacts =>  [newContact, ...contacts])
  };
   
    
 
  const deleteContact = (contactId) => {
    setContacts( contacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    
  

 
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <Form onaddContact={addContact} />
        <Title> Contacts </Title>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={getFilterContacts}
          onDeleteContact={deleteContact}
        />
      </AppContainer>
    );
}

