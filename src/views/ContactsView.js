import React from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import Nothing from "../components/Nothing";
import Loader from "../components/Loader.jsx";
import * as selectors from "../redux/contacts/contacts-selectors";

const App = () => {
  const contacts = useSelector(selectors.getContacts);
  const isLoading = useSelector(selectors.getLoading);

  return (
    <div className="wrapper">
      <ContactForm />

      {contacts.length === 0 && <Nothing />}

      {contacts.length > 1 && <Filter />}

      {isLoading && <Loader />}

      {<ContactList />}
    </div>
  );
};

export default App;

// ========
// const mapStateToProps = (state) => ({
//   contacts: selectors.getContacts(state),
//   isLoading: selectors.getLoading(state),
// });
