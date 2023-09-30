import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        {!error && <Contacts />}
        {isLoading && !error && <Loader />}
      </Section>
    </>
  );
};
