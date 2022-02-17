import React from "react";
import PropTypes from "prop-types";
import { ItemContact } from "./ElementContactsList.styled";

export default function ElementContactsList({ name, number, children }) {
  return (
    <ItemContact>
      <p>{name}:</p>
      <p>{number}</p>
      {children}
    </ItemContact>
  );
}

ElementContactsList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.object,
};
