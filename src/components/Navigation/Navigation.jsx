import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
