import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = ({ value }) => {
  const dispatch = useDispatch();

  const filterContacts = (value) => {
    dispatch({ type: "FILTER_CONTACTS", payload: value });
  };

  return (
    <div className={css.searchBoxContainer}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => filterContacts(e.target.value)}
        className={css.searchBoxInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
