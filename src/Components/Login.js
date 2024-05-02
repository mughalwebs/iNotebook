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
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="password" onChange={onChange} value={credentials.password} />
        </div>
        <button type="submit" className="btn btn-outline-primary float-end">Login</button>
      </form>
    </>
  )
}
