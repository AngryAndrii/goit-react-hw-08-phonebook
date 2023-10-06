import { useEffect } from 'react';
import { StyledList } from './Contacts.styled';
import { deleteContact, fetchContacts } from 'service/getContacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <StyledList>
        {contacts?.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span> : {number}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
      </StyledList>
    </>
  );
};

export default Contacts;
