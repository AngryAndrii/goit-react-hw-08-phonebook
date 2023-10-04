import { Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectError, selectLoading } from 'redux/selectors';
import Home from 'pages/home';
import Register from 'pages/register';
import Login from 'pages/login';
import Contacts from 'pages/contacts';
import Notfound from 'pages/notfound';
import AppBar from './AppBar/AppBar';
import LayOut from './LayOut/LayOut';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h4>Refreshing user...</h4>
  ) : (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<LayOut />} />
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};
