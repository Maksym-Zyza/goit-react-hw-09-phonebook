import { createAction } from "@reduxjs/toolkit";

// Оновлення
export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

// Додавання
export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

// Видалення
export const delContactRequest = createAction("contacts/delContactRequest");
export const delContactSuccess = createAction("contacts/delContactSuccess");
export const delContactError = createAction("contacts/delContactError");

export const filterContacts = createAction("Contact/filter");

// ====== До contacts-operetions
// export const addContact = createAction("Contact/add");
// export const deleteContact = createAction("Contact/delete");
