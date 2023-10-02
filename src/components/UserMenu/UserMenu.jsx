import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Auth/operations';
import { selectUser } from 'redux/Auth/selectors';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

export default UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectUser.name);

  console.log(name);

  const handleLogout = dispatch(logout());

  return (
    <>
      {/* <p>Welcome, {user.name}</p> */}
      <p>Welcome ...user... </p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
