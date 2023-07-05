import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { getFilter } from '../../redux/selectors';

const ContactListElement = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));  
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <>
      {
        filteredContacts.map(({ id, name, number }) =>
        <li key={id} className={css.contactElement}>
          {name}: {number}
          <button className={css.delete} onClick={() => handleDelete(id)} id={id} type='button'>Delete</button>
        </li>
      )}
    </>
  )
}

export default ContactListElement