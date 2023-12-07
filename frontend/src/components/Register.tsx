// Register.tsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

interface RegisterProps {
  onRegisterSuccess: (token: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Parolele nu coincid');
        return;
      }

      const response = await axios.post('http://127.0.0.1:3001/register', { email, password });

      if (response.data.success) {
        onRegisterSuccess(response.data.token);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Eroare la înregistrare');
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

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Button variant="primary" onClick={handleRegister}>
        Create Account
      </Button>
    </Form>
  );
};

export default Register;
