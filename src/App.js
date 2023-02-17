import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import contactData from './Components/ContactData';
import { ContactForm, Filter, ContactList } from './Components/index';
import { Container, TitleH1, TitleH2 } from './Components/Phonebook.styled';

//===My custom hook===
const useLocalStorage = (key, defaultValue) => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts, key]);

  return [contacts, setContacts];
};
//===End===

export default function App() {
  const [contacts, setContacts] = useLocalStorage('phoneBook', contactData);
  const [filter, setFilter] = useState('');

  const addNewContact = (name, number) => {
    let condition = true;
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.forEach(item => {
      if (item.name === name) {
        condition = false;
      }
    });

    if (condition) {
      setContacts([contact, ...contacts]);
    } else alert(`${contact.name} is already in contacts.`);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteConatact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onSubmit={addNewContact} />
      <TitleH2>Contacts</TitleH2>
      <Filter filter={filter} onFilterChange={changeFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteConatact}
      />
    </Container>
  );
}
