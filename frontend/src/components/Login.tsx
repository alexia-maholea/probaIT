// Login.tsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

interface LoginProps {
  onLoginSuccess: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/login', { email, password });

      if (response.data.success) {
        onLoginSuccess(response.data.token);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Eroare la autentificare:', error);
      setError('Eroare la autentificare');
    }
  };

  return (
    <Form className="d-grid gap-2">
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </Form>
  );
};

export default Login;
