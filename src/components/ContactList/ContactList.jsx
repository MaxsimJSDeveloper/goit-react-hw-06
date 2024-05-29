import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const { items } = useSelector((state) => state.contacts);
  const { name } = useSelector((state) => state.filters);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
