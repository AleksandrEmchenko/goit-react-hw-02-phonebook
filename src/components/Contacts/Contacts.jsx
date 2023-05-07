import React from "react";
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

function Contacts({ title, contacts }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
{contacts.map(contact => {
    return(
        <li key={contact.id}>{contact.name}: {contact.number}</li>
    )
})}
      
        
      </ul>
    </div>
  );
}

// Contacts.propTypes = propTypes;
// Contacts.defaultProps = defaultProps;
// #endregion

export default Contacts;

// Contacts.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string),
//     contact: PropTypes.string
// };