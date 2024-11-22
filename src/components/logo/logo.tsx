import { NavLink } from 'react-router-dom';
import { logoStyle } from './logo.style';
import { AppRoute } from '#root/const';

const Logo = () => {
  return (
    <NavLink className="logo" css={logoStyle} to={AppRoute.Main}>
      <img src="logo.svg" alt="logo" />
    </NavLink>
  );
}

export default Logo