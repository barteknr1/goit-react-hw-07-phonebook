import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

const ContactListElement = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));  
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  const sortedFilteredContacts = filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      {
        sortedFilteredContacts.map(({ id, name, number }) =>
        <li key={id} className={css.contactElement}>
          {name}: {number}
          <button className={css.delete} onClick={() => handleDelete(id)} id={id} type='button'>Delete</button>
        </li>
      )}
    </>
  )
}

export default ContactListElement