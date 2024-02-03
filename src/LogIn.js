import React, { useState } from 'react';
import myImage from './download1.jpg';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login clicked!');
  };

  return (
    <div className="container-fluid d-flex flex-column vh-100">
      {/* Header */}
      <div className="p-2 bg-secondary">
        <h3 className="text-light ms-4">Physio Plus Tech</h3>
      </div>
      {/* Content */}
      <div className="row flex-grow-1 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="container rounded shadow-lg p-5">
            <div className="row">
              {/* Image Section */}
              <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center">
                <img src={myImage} alt="Physio Plus Tech" className="img-fluid" />
              </div>
              {/* Signup Section */}
              <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center">
                <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
                  <h2 className="text-center mb-4">LogIn</h2>
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