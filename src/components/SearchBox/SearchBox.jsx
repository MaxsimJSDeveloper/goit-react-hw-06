import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBoxContainer}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.searchBoxInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
