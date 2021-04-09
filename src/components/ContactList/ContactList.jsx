import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import * as operations from "../../redux/contacts/contacts-operations";
import * as selectors from "../../redux/contacts/contacts-selectors";
import style from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectors.getContactListFilter);
  const dispatch = useDispatch();

  const onDelBtnClick = useCallback(
    (id) => dispatch(operations.deleteContact(id)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.listItem}>
          <span className={style.name}>{name}:</span>
          <span className={style.namber}>{number}</span>
          <button
            className={style.btn}
            type="button"
            id={id}
            onClick={() => onDelBtnClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = PropTypes.shape({
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onDelBtnClick: PropTypes.func.isRequired,
}).isRequired;

export default ContactList;

// ======= class =======
// class ContactList extends React.Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

// ContactList.propTypes = PropTypes.shape({
//   contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
//   onDelBtnClick: PropTypes.func.isRequired,
// }).isRequired;

// const mapStateToProps = (state) => ({
//   contacts: selectors.getContactListFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDelBtnClick: (id) => dispatch(operations.deleteContact(id)),
//   fetchContacts: () => dispatch(operations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
