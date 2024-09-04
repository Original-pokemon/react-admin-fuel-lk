import {
  Home as HomeIcon,
  Person as PersonIcon,
  CreditCard as CreditCardIcon,
  Receipt as ReceiptIcon,
  Map as MapIcon,
} from "@mui/icons-material";
import Logo from "../logo/logo";
import { navbarStyle } from "./nav-bar.style";

const Navbar = () => {
  return (
    <div className="navbar" css={navbarStyle}>
      <Logo />
      <div className="icons">
        <div className="user">
          <span> ГЛОБАЛ ИМПОРТ</span>
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
