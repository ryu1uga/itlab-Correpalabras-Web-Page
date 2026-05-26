import './Footer.css';
import logo_ulima from './logo_ulima.png';
import logo_unesco from './logo_unesco.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__imgs">
        <img
          src={logo_ulima}
          alt="Logo Universidad de Lima"
        />
        <img
          src={logo_unesco}
          alt="Logo UNESCO"
        />
      </div>
    </footer>
  );
};

export default Footer;
