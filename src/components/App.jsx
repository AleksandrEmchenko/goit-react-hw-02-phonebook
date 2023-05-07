import React from "react";
import { nanoid } from "nanoid";
import Contacts from "./Contacts";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
    number: '',
  };
  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState({
      name: "",
      number: "",
    });
    console.log(contact);
    console.log(this.state.contacts);

    this.setState((prevState) => {
      return { contacts: [...this.state.contacts, contact] };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <h2>Phonebook</h2>
          <label>
            
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
<label> Number
<input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</label>



          <br />
          <button type="submit">Add contact</button>
        </form>

        <Contacts title ={"Contacts"} contacts={this.state.contacts} />
          
        
      </div>
    );
  }
}

export default App;
