import { Route, Routes } from 'react-router-dom';
import Notfound from 'pages/notfound';
import LayOut from './LayOut/LayOut';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/operations';
import { useEffect, lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/home'));
const Register = lazy(() => import('../pages/register'));
const Login = lazy(() => import('../pages/login'));
const ContactsPage = lazy(() => import('../pages/contactsPage/contactsPage'));

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
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
};
