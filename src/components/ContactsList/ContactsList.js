import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {deleteContact} from '../../redux/actions'
import ElementContactsList from "../ElementContactsList/ElementContactsList";
import { ListContact, ButtonContact } from "./ContactsList.styled";

export default function ContactsList() {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));
  
  const getContacts = (state) => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const contacts = useSelector(getContacts);
  
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
