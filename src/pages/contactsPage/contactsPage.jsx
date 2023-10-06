import PhoneBook from 'components/PhoneBook/PhoneBook';
import Contacts from 'components/Contacts/Contacts';
import { StyledContactsPage } from './contactsPage.styled';

const ContactsPage = () => {
  return (
    <StyledContactsPage>
      <PhoneBook />
      <Contacts />
    </StyledContactsPage>
  );
};

export default ContactsPage;
