import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
  const normalizedName = name.toLowerCase();
  const nameExists = contacts.some(
    contact => contact.name.toLowerCase() === normalizedName
  );

  if (nameExists) {
    alert(`${name} is already in contacts!`);
    return;
  }

  const newContact = {
    id: nanoid(),
    name,
    number,
  };

  setContacts(prev => [...prev, newContact]);
};


  const handleFilterChange = e => setFilter(e.target.value);

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
  const deleteContact = (contactId) => {
  setContacts(prev => prev.filter(contact => contact.id !== contactId));
};


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
