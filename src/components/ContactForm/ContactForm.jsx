import React from "react";
// import styled from 'styled-components';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const {name, value} = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
 
    const contact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      };
      console.log(contact);

      this.setState({
        name: "",
        number: "",
      });

    this.props.onAddContact(contact);
  }

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
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
          <label>
            {" "}
            Number
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
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };
