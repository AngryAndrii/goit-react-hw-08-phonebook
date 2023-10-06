import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { StyledAppBar } from './AppBar.styled';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <StyledAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledAppBar>
  );
}
