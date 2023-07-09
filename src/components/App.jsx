import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsBar from './ContactsBar/ContactsBar';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getContacts, getError, getIsLoading } from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <>
      {/* {isLoading && !error && <p>Loading contacts...</p>} */}
      {/* {error && <p>{error}</p>} */}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsBar />
      <ContactList />
    </>
  )
};

export default App