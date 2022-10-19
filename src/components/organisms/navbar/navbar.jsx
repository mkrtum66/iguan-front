import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Button from '../../atoms/button';

import Logo from '../../../assets/photos/Logo';

import MobileNavbar from '../../../assets/photos/MobileNavbar';
import IgNavbar from './navbar.styled';

const Header = () => {
  const history = useHistory();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <Navbar key={'lg'} expand={'lg'} className="p-0">
      <IgNavbar className="ig-navbar">
        <div className="mobile-navbar-background">
          <MobileNavbar />
        </div>
        <Navbar.Brand onClick={() => history.push('/')}>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          onClick={() => setShowNavbar(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.5 1.5C0.5 1.10218 0.658035 0.720645 0.93934 0.43934C1.22064 0.158036 1.60218 0 2 0H20C20.3978 0 20.7794 0.158036 21.0607 0.43934C21.342 0.720645 21.5 1.10218 21.5 1.5C21.5 1.89782 21.342 2.27936 21.0607 2.56066C20.7794 2.84196 20.3978 3 20 3H2C1.60218 3 1.22064 2.84196 0.93934 2.56066C0.658035 2.27936 0.5 1.89782 0.5 1.5ZM0.5 9C0.5 8.60218 0.658035 8.22064 0.93934 7.93934C1.22064 7.65804 1.60218 7.5 2 7.5H20C20.3978 7.5 20.7794 7.65804 21.0607 7.93934C21.342 8.22064 21.5 8.60218 21.5 9C21.5 9.39782 21.342 9.77936 21.0607 10.0607C20.7794 10.342 20.3978 10.5 20 10.5H2C1.60218 10.5 1.22064 10.342 0.93934 10.0607C0.658035 9.77936 0.5 9.39782 0.5 9ZM0.5 16.5C0.5 16.1022 0.658035 15.7206 0.93934 15.4393C1.22064 15.158 1.60218 15 2 15H20C20.3978 15 20.7794 15.158 21.0607 15.4393C21.342 15.7206 21.5 16.1022 21.5 16.5C21.5 16.8978 21.342 17.2794 21.0607 17.5607C20.7794 17.842 20.3978 18 20 18H2C1.60218 18 1.22064 17.842 0.93934 17.5607C0.658035 17.2794 0.5 16.8978 0.5 16.5Z"
              fill="#6EBD44"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          show={showNavbar ? true : ''}
          onHide={() => setShowNavbar(false)}
          backdropClassName={'ig-backdrop'}
        >
          <Offcanvas.Header onClick={() => setShowNavbar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
            >
              <path
                d="M0.833496 1.5C0.833496 1.16848 0.960803 0.850537 1.18741 0.616117C1.41402 0.381696 1.72136 0.25 2.04183 0.25H18.9585C19.279 0.25 19.5863 0.381696 19.8129 0.616117C20.0395 0.850537 20.1668 1.16848 20.1668 1.5C20.1668 1.83152 20.0395 2.14946 19.8129 2.38388C19.5863 2.6183 19.279 2.75 18.9585 2.75H2.04183C1.72136 2.75 1.41402 2.6183 1.18741 2.38388C0.960803 2.14946 0.833496 1.83152 0.833496 1.5ZM0.833496 16.5C0.833496 16.1685 0.960803 15.8505 1.18741 15.6161C1.41402 15.3817 1.72136 15.25 2.04183 15.25H18.9585C19.279 15.25 19.5863 15.3817 19.8129 15.6161C20.0395 15.8505 20.1668 16.1685 20.1668 16.5C20.1668 16.8315 20.0395 17.1495 19.8129 17.3839C19.5863 17.6183 19.279 17.75 18.9585 17.75H2.04183C1.72136 17.75 1.41402 17.6183 1.18741 17.3839C0.960803 17.1495 0.833496 16.8315 0.833496 16.5ZM9.29183 7.75C8.97136 7.75 8.66402 7.8817 8.43741 8.11612C8.2108 8.35054 8.0835 8.66848 8.0835 9C8.0835 9.33152 8.2108 9.64946 8.43741 9.88388C8.66402 10.1183 8.97136 10.25 9.29183 10.25H18.9585C19.279 10.25 19.5863 10.1183 19.8129 9.88388C20.0395 9.64946 20.1668 9.33152 20.1668 9C20.1668 8.66848 20.0395 8.35054 19.8129 8.11612C19.5863 7.8817 19.279 7.75 18.9585 7.75H9.29183Z"
                fill="#6EBD44"
              />
            </svg>
          </Offcanvas.Header>
          <Offcanvas.Body className={'justify-content-end'}>
            <Nav className="ml-auto ig-navbar-items">
              <NavLink to={'/services'} onClick={() => setShowNavbar(false)}>
                Services
              </NavLink>
              <NavLink to={'/process'} onClick={() => setShowNavbar(false)}>
                Our Process
              </NavLink>
              <NavLink to={'/products'} onClick={() => setShowNavbar(false)}>
                Our Products
              </NavLink>
              <NavLink to={'/aboutUs'} onClick={() => setShowNavbar(false)}>
                About Us
              </NavLink>
              <NavLink to={'/career'} onClick={() => setShowNavbar(false)}>
                Career
              </NavLink>
              <Button
                onClick={() => {
                  history.push('/contactUs');
                  setShowNavbar(false);
                }}
              >
                Contact Us
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </IgNavbar>
    </Navbar>
  );
};

export default Header;
