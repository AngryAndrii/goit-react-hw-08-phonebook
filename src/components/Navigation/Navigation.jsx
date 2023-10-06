import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNavigation>
      <NavLink to="/" end>
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </StyledNavigation>
  );
}
