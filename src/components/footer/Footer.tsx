import Logo from "../logo/logo"
import { footerStyle } from "./footer.style"

const Footer = () => {
  return (
    <div className="footer" css={footerStyle}>
      <Logo />
    </div>
  )
}

export default Footer