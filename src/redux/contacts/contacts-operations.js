import axios from "axios";
import * as actions from "./contacts-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

// Оновлення
export const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error.message));
  }
};

// Додавання
export const addContact = ({ name, number }) => (dispatch) => {
  const contacts = { name, number };

  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contacts)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error.message)));
};

// Видалення
export const deleteContact = (id) => (dispatch) => {
  dispatch(actions.delContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.delContactSuccess(id)))
    .catch((error) => dispatch(actions.delContactError(error.message)));
};

// ===============
// export const fetchContacts = () => (dispatch) => {
//   dispatch(actions.fetchContactRequest());

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
//     .catch((error) => dispatch(actions.fetchContactError(error.message)));
// };

// axios.defaults.baseURL = "http://localhost:3000";
