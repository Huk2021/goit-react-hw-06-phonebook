import { nanoid } from "nanoid";
import { createAction } from '@reduxjs/toolkit';

export  const addContact = createAction("contacts/add", (data) => ({
  payload: {
    ...data,
    id: nanoid(),
  },
}));

export  const deleteContact = createAction('contacts/delete');
export  const changeFilter = createAction("contacts/changeFilter");

// const contactActions = { addContact, deleteContact, changeFilter };
// export default contactActions;