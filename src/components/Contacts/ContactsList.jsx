import React from "react";
// import styled from 'styled-components';
// import PropTypes from "prop-types";

function ContactsList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Contacts.propTypes = propTypes;
// Contacts.defaultProps = defaultProps;
// #endregion

export default ContactsList;

// Contacts.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string),
//     contact: PropTypes.string
// };
