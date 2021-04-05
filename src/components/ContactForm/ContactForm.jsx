import { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/contacts/contacts-operations";
import * as selectors from "../../redux/contacts/contacts-selectors";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handelChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  handleSabmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (contacts.some((contact) => contact.name === name)) {
      return alert(`Name "${name}" already exists, please enter another name.`);
    } else this.props.onSubmit({ name, number });

    this.resetForm();
  };

  render() {
    const { contacts } = this.props;
    return (
      <>
        <div>
          <h1 className={css.title}>Phonebook</h1>
          <form
            className={css.form}
            autoComplete="off"
            onSubmit={this.handleSabmit}
          >
            <label className={css.label}>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handelChange}
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Number:
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handelChange}
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
  }
}

const mapStateToProps = (state) => ({
  contacts: selectors.getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (obj) => dispatch(operations.addContact(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
