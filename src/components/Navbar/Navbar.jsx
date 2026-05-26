import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { IconContext } from 'react-icons';
import './Navbar.css';
import logo_corre from './ic_logo_horizontal.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isLandscape = window.innerWidth > window.innerHeight;

      if (isLandscape && window.innerWidth <= 935) {
        const currentScrollPos = window.pageYOffset;
        const isScrollingDown = prevScrollPos < currentScrollPos;
        const isAtTop = currentScrollPos < 10;
        setVisible(!isScrollingDown || isAtTop);
        setPrevScrollPos(currentScrollPos);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className={`navbar ${!visible ? 'navbar-hidden' : ''}`}>
        <div className="navbar-logo">
          <Link to='/' className="menu-bars" onClick={() => setIsOpen(false)}>
            <img src={logo_corre} alt="logo_corre" className="logo-corre" />
          </Link>
        </div>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isOpen ? <X size={24} color="#f35424" /> : <Menu size={24} color="#f35424" />}
        </button>

        <nav className={`navbar-menu ${isOpen ? 'show-mobile-menu' : ''}`}>
          <Link className='nav-item' to='/' onClick={() => setIsOpen(false)}>
            INICIO
          </Link>
          <Link className='nav-item' to='/acerca-de' onClick={() => setIsOpen(false)}>
            ACERCA DE
          </Link>
          <Link className='nav-item' to='/investigaciones' onClick={() => setIsOpen(false)}>
            INVESTIGACIONES
          </Link>
          <div className="nav-item dropdown">
            <span>ACTIVIDADES</span>
            <div className="dropdown-content">
              <Link to='/comprension-lectora' onClick={() => setIsOpen(false)}>
                COMPRENSIÓN LECTORA
              </Link>
              <Link to='/creacuentos' onClick={() => setIsOpen(false)}>
                CREACUENTOS
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;