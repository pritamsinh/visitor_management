
// LoginForm.js
import React, { useState } from 'react';
import './FormStyles.css';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      // Reset form fields and errors
      setEmail('');
      setPassword('');
      setError('');

      // Handle success (e.g., redirect user)
      console.log('Login successful');
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError(error.message);
    }
  };

 return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn">Login</button>
    </form>
  );
};

export default LoginForm;
