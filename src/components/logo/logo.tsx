import { logoStyle } from './logo.style';

const Logo = () => {
  return (
    <div className="logo" css={logoStyle}>
      <img src="logo.svg" alt="logo" />
    </div>
  );
}

export default Logo