import React from "react";
import PropTypes from "prop-types";
import ElementContactsList from "../ElementContactsList/ElementContactsList";
import { ListContact, ButtonContact } from "./ContactsList.styled";

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ListContact>
      {contacts.map(({ id, name, number }) => (
        <ElementContactsList key={id} name={name} number={number}>
          <ButtonContact onClick={() => onDeleteContact(id)}>
            Delete
          </ButtonContact>
        </ElementContactsList>
      ))}
    </ListContact>
  );
}

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
