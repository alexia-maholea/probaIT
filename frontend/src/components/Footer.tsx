import React from 'react';
import { FaInstagram, FaTwitter, FaTwitch, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="footer fixed-bottom"
      style={{
        backgroundColor: '#FF1F66',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: '50px', marginBottom: '10px' }}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff'}}>
            <FaInstagram size={50} />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaFacebook size={50} />
        </a>
        <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaTwitch size={50} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
