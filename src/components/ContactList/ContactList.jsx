import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as operations from "../../redux/contacts/contacts-operations";
import * as selectors from "../../redux/contacts/contacts-selectors";
import style from "./ContactList.module.css";

class ContactList extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDelBtnClick } = this.props;
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
  }
}

ContactList.propTypes = PropTypes.shape({
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onDelBtnClick: PropTypes.func.isRequired,
}).isRequired;

const mapStateToProps = (state) => ({
  contacts: selectors.getContactListFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelBtnClick: (id) => dispatch(operations.deleteContact(id)),
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
