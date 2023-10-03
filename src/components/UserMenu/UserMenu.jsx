import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/Auth/operations';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

export default function UserMenu() {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogout = dispatch(logout());

  return (
    <>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
