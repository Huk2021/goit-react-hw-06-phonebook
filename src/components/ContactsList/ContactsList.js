import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "redux/selector";
import {deleteContact} from '../../redux/actions'
import ElementContactsList from "../ElementContactsList/ElementContactsList";
import { ListContact, ButtonContact } from "./ContactsList.styled";

export default function ContactsList() {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));
  
    const contacts = useSelector(getVisibleContacts);
  
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
  
};
