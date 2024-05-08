import React, { useState } from "react";
import styles from '../components/Navbar.module.css'; 
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const expandedMenuLinkStyle = {
    backgroundColor: 'rgba(37, 25, 43, 0.6)', 
    color: '#D9D9D9', 
    padding: '10px', 
  };

  const menuLinkStyle = {
    color: '#D9D9D9', 
    fontFamily: 'Inder',
    fontSize: '1.5rem',
    marginRight: '40px',
  };

  return (
    <div className={styles.customNavbarWrapper}>
      <BootstrapNavbar expand="lg" expanded={expanded}>
        <BootstrapNavbar.Brand href="/" className="custom-navbar-brand" style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Kanit', color: '#D9D9D9', marginLeft: '30px' }}> FLO </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ background: '#D9D9D9' }} onClick={() => setExpanded(!expanded)} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto" style={{ marginRight: '20px' }}>
            <Nav.Link href="/" className={`${styles.navLink} custom-nav-link`} style={expanded ? expandedMenuLinkStyle : menuLinkStyle}> Inicio </Nav.Link>
            <Nav.Link href="/about" className={`${styles.navLink} custom-nav-link`} style={expanded ? expandedMenuLinkStyle : menuLinkStyle}>Acerca de mí</Nav.Link>
            <Nav.Link href="/projects" className={`${styles.navLink} custom-nav-link`} style={expanded ? expandedMenuLinkStyle : menuLinkStyle}>Proyectos</Nav.Link>
            <Nav.Link href="/contact" className={`${styles.navLink} custom-nav-link`} style={expanded ? expandedMenuLinkStyle : menuLinkStyle}>Contacto</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
























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



