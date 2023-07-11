import ContactListElement from './ContactListElement';
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={css.contactList}>
          <ContactListElement />
        </ul>
      ) : (
        <p className={css.noContacts}>No saved contacts</p>
      )
      }
    </>
  )
}

export default ContactList