import { Routes, Route, NavLink } from 'react-router-dom';
import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/selectors';
import Home from 'pages/home';
import Register from 'pages/register';
import Login from 'pages/login';
import Contactsp from 'pages/contacts';
import Notfound from 'pages/notfound';

export const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    // <>
    //   <Section title="Phonebook">
    //     <PhoneBook />
    //   </Section>
    //   <Section title="Contacts">
    //     <Filter />
    //     {!error && <Contacts />}
    //     {isLoading && !error && <Loader />}
    //   </Section>
    // </>
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contactsp />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};
