import React, { useContext, useState } from 'react'
import LoginContext from '../Context/Authentication/LoginContext';

export default function Login() {
  const loginContext = useContext(LoginContext);
  const { LoginUser } = loginContext;

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    LoginUser(credentials.email, credentials.password);
    setCredentials({ email: "", password: "" });
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h2 className='my-3 remove-typing-cursor'>Login to Deal With Your Information.</h2>
      <form onSubmit={handleOnSubmit} className='remove-typing-cursor'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email} required />
          <div id="emailHelp" className="form-text">
            <i className="fa-regular fa-face-smile"></i>
            &ensp;We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="password" onChange={onChange} value={credentials.password} required />
        </div>
        <button type="submit" className="btn btn-outline-primary float-end">Login</button>
      </form>
    </div>
  )
}
