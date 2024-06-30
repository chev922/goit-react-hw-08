import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <Contact key={contact.id} item={contact} />
          ))}
        </ul>
      )}
      {}
    </>
  );
}
