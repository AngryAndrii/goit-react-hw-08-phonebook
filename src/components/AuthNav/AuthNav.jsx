import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <NavLink to="/register">registration</NavLink>
      <NavLink to="/login">login</NavLink>
    </>
  );
}
