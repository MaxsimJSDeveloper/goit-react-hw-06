import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <p className={css.contactName}>Name: {name}</p>
      <p className={css.contactNumber}>Number: {number}</p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
