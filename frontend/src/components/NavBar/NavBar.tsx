import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login';
import Register from '../Register';

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false); // Adăugat pentru gestionarea stării modale de înregistrare
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Adăugat pentru gestionarea stării autentificării

  const handleLoginModalShow = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  const handleRegisterModalShow = () => setShowRegisterModal(true);
  const handleRegisterModalClose = () => setShowRegisterModal(false);

  const handleLoginSuccess = (token: string) => {
    console.log('Login successful. Token:', token);

    handleLoginModalClose();
    setIsAuthenticated(true);
  };

  const handleRegisterSuccess = (token: string) => {
    console.log('Register successful. Token:', token);

    handleRegisterModalClose();
    setIsAuthenticated(true);

  };


  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="container">
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      >
        <a className="navbar-brand" href="#">
          <img src="./logo.png" alt="Logo" width="80" height="40" style={{ marginLeft: 15 }} />
        </a>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          className="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ marginRight: 15 }}>
            {!isAuthenticated && (
              <>
              <li className="nav-item active">
                <Button variant="primary" onClick={handleLoginModalShow}>
                  Login
                </Button>
              </li>
              <li className="nav-item">
                <Button variant="primary" onClick={handleRegisterModalShow}>
                  Register
                </Button>
              </li>
              </>
            )}
            {isAuthenticated && (
              <>
              <li className="nav-item">
                <Button variant="primary" onClick={handleLogout}>
                  Create Poll
                </Button>
              </li>
              <li className="nav-item">
                <Button variant="primary" onClick={handleLogout}>
                  Logout
                </Button>
              </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Modalul de Login */}
      <Modal
        show={showLoginModal}
        onHide={handleLoginModalClose}
        style={{
          top: '301px',
          borderRadius: '22px',
        }}
      >
        <Modal.Header closeButton className="text-center" style={{ backgroundColor: '#04395E', color: '#fff' }}>
          <Modal.Title className="form-title text-center">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#04395E', color: '#fff' }}>
          <Login onLoginSuccess={handleLoginSuccess} />
        </Modal.Body>
      </Modal>

      {/* Modalul de Register */}
      <Modal show={showRegisterModal} onHide={handleRegisterModalClose}>
        <Modal.Header closeButton className="text-center" style={{ backgroundColor: '#04395E', color: '#fff' }}>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#04395E', color: '#fff' }}>
          <Register onRegisterSuccess={handleRegisterSuccess} />
        </Modal.Body>
      </Modal>
      </div>
  );
};

export default NavBar;
