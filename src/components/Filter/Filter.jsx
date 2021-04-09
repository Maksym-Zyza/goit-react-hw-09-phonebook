// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import * as selectors from "../../redux/contacts/contacts-selectors";
import style from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(actions.filterContacts(e.target.value));

  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        <span className={style.name}>Find contacts by name</span>
        <input
          className={style.input}
          type="text"
          name="name"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;

// ==========
// const mapStateToProps = (state) => ({
//   value: selectors.getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(actions.filterContacts(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
