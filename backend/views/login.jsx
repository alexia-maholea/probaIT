import React from 'react';

const Login = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    // Adaugă logica pentru a trata datele introduse și a face cererea către server
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="username" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Signup</a></p>
    </div>
  );
};

export default Login;
