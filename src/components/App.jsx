import React from "react";
// import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import ContactsList from "./Contacts";
// import Filter from "./Filter";

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

  handleFilter = (event) => {
    this.handleChange(event);
    console.log(event.currentTarget.value);
  };


  addContact = contact => {
    // const contact = {
    //   id: nanoid(),
    //   name: this.state.name,
    //   number: this.state.number,
    // };

    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact]
      }
    });



  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onAddContact={this.addContact}/>

        <h2>Contacts</h2>

        {/* <Filter value={this.state.filter} onChange={this.handleChange} /> */}
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;