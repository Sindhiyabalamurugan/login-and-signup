import React, { useState } from 'react';
import myImage from './download1.jpg';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      // Optionally redirect or perform any necessary actions after successful login
      console.log('Login successful');
      setErrorMessage('');
    } catch (error) {
      console.error('Error logging in:', error.message);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="container-fluid d-flex flex-column vh-100">
      <div className="p-2 bg-secondary d-flex justify-content-between align-items-center">
        <h3 className="text-light ms-4">Physio Plus Tech</h3>
        <div>
        <Link to="/login" className="btn btn-primary me-2">Login</Link>
        <Link to="/signup" className="btn btn-primary">SignUp</Link>
      </div>
      </div>
      <div className="row flex-grow-1 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="container rounded shadow-lg p-5">
            <div className="row">
              <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center">
                <img src={myImage} alt="Physio Plus Tech" className="img-fluid" />
              </div>
              <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center">
                <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
                  <h2 className="text-center mb-4">Log In</h2>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                    <button type="submit" className="btn btn-primary w-100">Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn; 