import React, { useContext, useState } from 'react'
import SignupContext from '../Context/Authentication/SignupContext';
import { Tooltip } from 'react-tooltip';

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
    <div>
      <h2 className='my-3 remove-typing-cursor'>Signup to Save Your Informations.</h2>
      <form onSubmit={signingUp} className='mt-2'>
        <div className="my-3">
          <label htmlFor="name" className="form-label remove-typing-cursor">Name</label>
          <input type="text" name='name' className="form-control remove-typing-cursor" id="name" placeholder="Name" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label remove-typing-cursor">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text remove-typing-cursor">We'll never share your email with anyone else.</div>
        </div>
        <label htmlFor="inputPassword5" className="form-label remove-typing-cursor">Password</label>
        <input type="password" name='password' id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={onChange} />
        <div id="passwordHelpBlock" className="form-text remove-typing-cursor">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>
        <label htmlFor="inputCPassword5" className="form-label remove-typing-cursor">Confirm Password</label>
        <input type="password" name='cpassword' id="inputCPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={onChange} disabled={credentials.password.length === 0} />
        {credentials.password !== credentials.cpassword ? <div id="passwordHelpBlock" className="form-text text-danger remove-typing-cursor">
          <i className="fa-solid fa-triangle-exclamation"></i>&ensp;Password Must be Matched.
        </div> : credentials.password.length > 0 ? <div id="passwordHelpBlock" className="form-text text-success remove-typing-cursor"><i className="fa-solid fa-circle-check"></i>&ensp;Password Matched Successfully.
        </div> : ''}
        <button data-tooltip-id='signupButton' className="btn btn-outline-primary float-end mt-2" type="submit" disabled={credentials.password !== credentials.cpassword || credentials.name.length === 0 || credentials.email.length === 0 || credentials.password.length === 0}>Signup</button>
      </form>
      <Tooltip id="signupButton" place="bottom" effect="solid" content="Create Your Account" style={{
        color: 'white',
        backgroundColor: '#0D6EFD',
        borderRadius: '5px',
      }} />
    </div>
  )
}