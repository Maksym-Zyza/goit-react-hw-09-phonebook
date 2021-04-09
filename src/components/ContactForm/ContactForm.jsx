import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as operations from "../../redux/contacts/contacts-operations";
import * as selectors from "../../redux/contacts/contacts-selectors";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };

  const [number, setNumber] = useState("");
  const updateNumber = (e) => {
    setNumber(e.target.value);
  };

  const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();

  const handleSabmit = useCallback(
    (e) => {
      e.preventDefault();

      if (contacts.some((contact) => contact.name === name)) {
        return alert(
          `Name "${name}" already exists, please enter another name.`
        );
      } else dispatch(operations.addContact({ name, number }));

      setName("");
      setNumber("");
    },
    [contacts, name, number, dispatch]
  );

  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <form className={css.form} autoComplete="off" onSubmit={handleSabmit}>
          <label className={css.label}>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={updateName}
              className={css.input}
            />
          </label>
          <label className={css.label}>
            Number:
            <input
              type="tel"
              name="number"
              value={number}
              onChange={updateNumber}
              className={css.input}
            />
          </label>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
        <h2 className={css.title}>Contacts ({contacts.length})</h2>
      </div>
    </>
  );
};

export default ContactForm;

// ====== class ======
// class ContactForm extends Component {

//   state = {
//     name: "",
//     number: "",
//   };

//   handelChange = (e) => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   resetForm = () => {
//     this.setState({ name: "", number: "" });
//   };

//   handleSabmit = (e) => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const { contacts } = this.props;

//     if (contacts.some((contact) => contact.name === name)) {
//       return alert(`Name "${name}" already exists, please enter another name.`);
//     } else this.props.onSubmit({ name, number });

//     this.resetForm();
//   };

// const mapStateToProps = (state) => ({
//   contacts: selectors.getContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (obj) => dispatch(operations.addContact(obj)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
