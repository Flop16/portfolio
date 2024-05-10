import React, { useState } from "react";
import styles from '../components/Navbar.module.css'; 
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const expandedMenuLinkStyle = {
    backgroundColor: 'rgba(37, 25, 43, 0.6)', 
    color: '#D9D9D9', 
    padding: '20px', 
    fontSize: '1rem',
  };

  const menuLinkStyle = {
    color: '#D9D9D9', 
    fontFamily: 'Inder',
    fontSize: '1.2rem',
    marginRight: '40px',
    textDecoration: 'none', 
    position: 'relative', 
  }; 

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: '0',
    width: '0',
    height: '2px', 
    backgroundColor: '#C48DEF', 
    transition: 'width 0.3s ease-in-out', 
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#C48DEF'; 
    e.target.querySelector('.underline').style.width = '30%'; 
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#D9D9D9'; 
    const underline = e.target.querySelector('.underline');
    if (underline) {
      underline.style.width = '0'; 
    }
  };

  return (
    <div className={styles.customNavbarWrapper}>
      <BootstrapNavbar expand="lg" expanded={expanded}>
        <BootstrapNavbar.Brand href="/" className="custom-navbar-brand" style={{ fontSize: '2.2rem', fontWeight: 'bold', fontFamily: 'Kanit', color: '#D9D9D9', marginLeft: '40px' }}> FLO </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ background: '#D9D9D9' }} onClick={() => setExpanded(!expanded)} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto" style={{ marginRight: '20px' }}>
          <Nav.Link 
              href="/" 
              className={`${styles.navLink} custom-nav-link`} 
              style={{ ...menuLinkStyle, ...(expanded ? expandedMenuLinkStyle : {}) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            > 
              Inicio
              <span className="underline" style={underlineStyle}></span> 
            </Nav.Link>
            <Nav.Link 
              href="/about" 
              className={`${styles.navLink} custom-nav-link`} 
              style={{ ...menuLinkStyle, ...(expanded ? expandedMenuLinkStyle : {}) }} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Acerca de mí
              <span className="underline" style={underlineStyle}></span> 
            </Nav.Link>
            <Nav.Link 
              href="/projects" 
              className={`${styles.navLink} custom-nav-link`} 
              style={{ ...menuLinkStyle, ...(expanded ? expandedMenuLinkStyle : {}) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Proyectos              
              <span className="underline" style={underlineStyle}></span> 
            </Nav.Link> 
            <Nav.Link 
              href="/contact" 
              className={`${styles.navLink} custom-nav-link`} 
              style={{ ...menuLinkStyle, ...(expanded ? expandedMenuLinkStyle : {}) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contacto
              <span className="underline" style={underlineStyle}></span> 
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;



/*
import React, { useState } from "react";
import styles from '../components/Navbar.module.css'; 
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const expandedMenuLinkStyle = {
    backgroundColor: 'rgba(37, 25, 43, 0.6)', 
    color: '#D9D9D9', 
    padding: '20px', 
    fontSize: '1.1em',
  };

  const menuLinkStyle = {
    color: '#D9D9D9', 
    fontFamily: 'Inder',
    fontSize: '1.3rem',
    marginRight: '40px',
    position: 'relative', 
    transition: 'color 0.5s ease-in-out'
  }; 

  const underlineStyle = {
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: 0,
    height: '2px',
    backgroundColor: '#C48DEF',
    transition: 'width 0.3s ease-in-out',
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#C48DEF'; 
    e.target.querySelector('.underline').style.width = '30%'; 
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#D9D9D9'; 
    const underline = e.target.querySelector('.underline');
    if (underline) {
      underline.style.width = '0'; 
    }
  };

  return (
    <div className={styles.customNavbarWrapper}>
      <BootstrapNavbar expand="lg" expanded={expanded}>
        <BootstrapNavbar.Brand href="/" className="custom-navbar-brand" style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Kanit', color: '#D9D9D9', marginLeft: '40px' }}> FLO </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ background: '#D9D9D9' }} onClick={() => setExpanded(!expanded)} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto" style={{ marginRight: '20px' }}>
            <Nav.Link 
              href="/" 
              className={`${styles.navLink} custom-nav-link`} 
              style={expanded ? expandedMenuLinkStyle : menuLinkStyle} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            > 
              Inicio
              <span className="underline" style={underlineStyle}></span> 
            </Nav.Link>
            <Nav.Link 
              href="/about" 
              className={`${styles.navLink} custom-nav-link`} 
              style={expanded ? expandedMenuLinkStyle : menuLinkStyle} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Acerca de mí
              <span className="underline" style={underlineStyle}></span> 
            </Nav.Link>
            <Nav.Link 
              href="/projects" 
              className={`${styles.navLink} custom-nav-link`} 
              style={expanded ? expandedMenuLinkStyle : menuLinkStyle} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Proyectos              
              <span className="underline" style={underlineStyle}></span> 
            </Nav.Link> 
            <Nav.Link 
              href="/contact" 
              className={`${styles.navLink} custom-nav-link`} 
              style={expanded ? expandedMenuLinkStyle : menuLinkStyle} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contacto
              <span className="underline" style={underlineStyle}></span> 
            </Nav.Link>

            </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;





/*

import React, { useState } from "react";
import styles from '../components/Navbar.module.css'; 
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const expandedMenuLinkStyle = {
    backgroundColor: 'rgba(37, 25, 43, 0.6)', 
    color: '#D9D9D9', 
    padding: '20px', 
    fontSize: '1rem',
  };

  const menuLinkStyle = {
    color: '#D9D9D9', 
    fontFamily: 'Inder',
    fontSize: '1.2rem',
    marginRight: '40px',
    textDecoration: 'none', 
    position: 'relative', 
  }; 

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: '0',
    width: '0',
    height: '2px', 
    backgroundColor: '#C48DEF', 
    transition: 'width 0.3s ease-in-out', 
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#C48DEF'; 
    e.target.querySelector('.underline').style.width = '30%'; 
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#D9D9D9'; 
    const underline = e.target.querySelector('.underline');
    if (underline) {
      underline.style.width = '0'; 
    }
  };

  return (
    <div className={styles.customNavbarWrapper}>
      <BootstrapNavbar expand="lg" expanded={expanded}>
        <BootstrapNavbar.Brand href="/" className="custom-navbar-brand" style={{ fontSize: '2.2rem', fontWeight: 'bold', fontFamily: 'Kanit', color: '#D9D9D9', marginLeft: '40px' }}> FLO </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ background: '#D9D9D9' }} onClick={() => setExpanded(!expanded)} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto" style={{ marginRight: '20px' }}>
            <Nav.Link 
              href="/" 
              className={`${styles.navLink} custom-nav-link`} 
              style={{ ...menuLinkStyle, ...(expanded && expandedMenuLinkStyle) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            > 
              <span>Inicio<span className="underline" style={underlineStyle}></span></span>
            </Nav.Link>
            <Nav.Link 
              href="/about" 
              className={`${styles.navLink} custom-nav-link`} 
              style={{ ...menuLinkStyle, ...(expanded && expandedMenuLinkStyle) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>Acerca de mí<span className="underline" style={underlineStyle}></span></span>
            </Nav.Link>
            <Nav.Link 
              href="/projects" 
              className={`${styles.navLink} custom-nav-link`} 
              style={{ ...menuLinkStyle, ...(expanded && expandedMenuLinkStyle) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>Proyectos<span className="underline" style={underlineStyle}></span></span>
            </Nav.Link>
            <Nav.Link 
              href="/contact" 
              className={`${styles.navLink} custom-nav-link`} 
              style={{ ...menuLinkStyle, ...(expanded && expandedMenuLinkStyle) }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>Contacto<span className="underline" style={underlineStyle}></span></span>
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;

/////////

a:hover::after {
  content:"";
  width: 30%;
  height: 2px;
  background: #C48DEF;
  position: absolute;
  bottom: -4px;
  left: 20px;
}




*/






















/*

import React from "react";
import styles from '../components/Navbar.module.css'; 
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div className={styles.customNavbarWrapper}>
      <BootstrapNavbar expand="lg">
        <BootstrapNavbar.Brand href="/" className="custom-navbar-brand" style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Kanit', color: '#D9D9D9', marginLeft: '30px' }}> FLO </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ background: '#D9D9D9' }} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto" style={{ marginRight: '20px' }}>
            <Nav.Link href="/" className={`${styles.navLink} custom-nav-link`} style={{ color: '#D9D9D9', fontFamily: 'Inder', fontSize: '1.3rem', marginRight: '20px' }}> Inicio </Nav.Link>
            <Nav.Link href="/about" className={`${styles.navLink} custom-nav-link`} style={{ color: '#D9D9D9', fontFamily: 'Inder', fontSize: '1.3rem', marginRight: '20px' }}>Acerca de mí</Nav.Link>
            <Nav.Link href="/projects" className={`${styles.navLink} custom-nav-link`} style={{ color: '#D9D9D9', fontFamily: 'Inder', fontSize: '1.3rem', marginRight: '20px' }}>Proyectos</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;


*/



