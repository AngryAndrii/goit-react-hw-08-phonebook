import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/selectors';
import Home from 'pages/home';
import Register from 'pages/register';
import Login from 'pages/login';
import Contacts from 'pages/contacts';
import Notfound from 'pages/notfound';
import AppBar from './AppBar/AppBar';

export const App = () => {
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
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};
