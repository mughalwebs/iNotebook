import React, { useContext, useState } from 'react'
import SignupContext from '../Context/Authentication/SignupContext';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let signupContext = useContext(SignupContext);
  const { SignupUser } = signupContext;
  const signingUp = (e) => {
    e.preventDefault();
    SignupUser(credentials.name, credentials.email, credentials.password);
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form onSubmit={signingUp} className='mt-2'>
        <div className="my-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name='name' className="form-control" id="name" placeholder="Name" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <label htmlFor="inputPassword5" className="form-label">Password</label>
        <input type="password" name='password' id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={onChange} />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>
        <label htmlFor="inputCPassword5" className="form-label">Confirm Password</label>
        <input type="password" name='cpassword' id="inputCPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={onChange} disabled={credentials.password.length === 0}/>
        {credentials.password !== credentials.cpassword ? <div id="passwordHelpBlock" className="form-text text-danger">
          <i className="fa-solid fa-triangle-exclamation"></i>&ensp;Password Must be Matched.
        </div> : credentials.password.length > 0 ? <div id="passwordHelpBlock" className="form-text text-success"><i className="fa-solid fa-circle-check"></i>&ensp;Password Matched Successfully.
        </div> : ''}
        <button className="btn btn-outline-primary float-end mt-2" type="submit" disabled={credentials.password !== credentials.cpassword || credentials.name.length === 0 || credentials.email.length === 0 || credentials.password.length === 0}>Signup</button>
      </form>
    </>
  )
}