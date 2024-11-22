import Logo from '../logo/logo';
import { FooterStyledBox } from './footer.style';

function Footer({ className }: { className?: string }) {
  return (
    <FooterStyledBox className={className}>
      <Logo />
    </FooterStyledBox>
  );
}

export default Footer;
