import React from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./Contacts";
import Filter from "./Filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = (contact) => {
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  handelCheckUniqContact = (name) => {
    const { contacts } = this.state;
    const isContact = contacts.find((contact) => contact.name === name);
    return isContact && alert(`${name} is already in contact`);
  };

  handleRemove = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          onAddContact={this.addContact}
          onCheckUniq={this.handelCheckUniqContact}
        />

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.handleFilter} />
        <ContactsList contacts={visibleContacts} onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
