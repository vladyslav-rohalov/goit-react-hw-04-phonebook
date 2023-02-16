import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import contactData from './Components/ContactData';
import { ContactForm, Filter, ContactList } from './Components/index';
import { Container, TitleH1, TitleH2 } from './Components/Phonebook.styled';

const LS_KEY = 'phoneBook';

class App extends Component {
  state = {
    contacts: contactData,
    filter: '',
  };

  componentDidMount() {
    const dataLS = JSON.parse(localStorage.getItem(LS_KEY));
    if (dataLS) {
      this.setState({ contacts: dataLS });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = ({ name, number }) => {
    let condition = true;
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.state.contacts.filter(({ name }) => {
      if (name.includes(contact.name)) {
        return (condition = false);
      } else {
        return true;
      }
    });

    if (condition === true) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else alert(`${contact.name} is already in contacts.`);
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteConatact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Container>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onSubmit={this.addNewContact} />
        <TitleH2>Contacts</TitleH2>
        <Filter filter={this.state.filter} onFilterChange={this.changeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.deleteConatact}
        />
      </Container>
    );
  }
}

export default App;
