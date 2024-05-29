import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  return (
    <div className={css.contact}>
      <p className={css.contactName}>Name: {name}</p>
      <p className={css.contactNumber}>Number: {number}</p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={deleteContact}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
