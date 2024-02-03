import React, { useState } from 'react';
import myImage from './download1.jpg';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Register clicked!');
  };

  return (
    <div className="container-fluid d-flex flex-column vh-75"> {/* Reduced height to vh-75 */}
      {/* Header */}
      <div className="p-2 bg-secondary">
        <h3 className="text-light ms-4">Physio Plus Tech</h3>
      </div>
      {/* Content */}
      <div className="row flex-grow-1 justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="container rounded shadow-lg p-4"> {/* Reduced padding to p-4 */}
            <div className="row">
              {/* Image Section */}
              <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center">
                <img src={myImage} alt="Physio Plus Tech" className="img-fluid" />
              </div>
              {/* Signup Section */}
              <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center">
                <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
                  <h2 className="text-center mb-4">Sign Up</h2>
                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
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
                    <div className="mb-3">
                      <label htmlFor="gender" className="form-label">Gender</label>
                      <select
                        className="form-select"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        checked={termsChecked}
                        onChange={() => setTermsChecked(!termsChecked)}
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="#">terms and conditions</a>
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={!termsChecked}>
                      Register
                    </button>
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

export default SignUp;