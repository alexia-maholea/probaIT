// // NavBar.tsx
// import React from 'react';
// import styles from './NavBar.module.css';

// const NavBar = () => {
//   return (
//         <div className="container">
//             <nav
//                 className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
//                 style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
//             >                
//                 <a className="navbar-brand" href="#">
//                     <img src="./logo.png" alt="Logo" width="80" height="40" style={{ marginLeft: 15}}/>
//                 </a>
//                 <button
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 className="navbar-toggler"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                     <ul className="navbar-nav ml-auto"  style={{marginRight: 15}}>
//                         <li className="nav-item active " style={{color: '#04395E' }}>
//                             <a className="nav-link " style={{color: '#04395E' }} href="#">Login</a>
//                             </li>
//                             <li className="nav-item">
//                             <a className="nav-link" style={{color: '#04395E' }} href="#">Register</a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//   );
// };
    
// export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';  // Importă Link
import styles from './NavBar.module.css';

const NavBar = () => {
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto" style={{ marginRight: 15 }}>
            <li className="nav-item active" style={{ color: '#04395E' }}>
              <Link className="nav-link" style={{ color: '#04395E' }} to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: '#04395E' }} to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
