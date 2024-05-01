import React from 'react'

export default function Login() {
    const loggingIn = () => {
        console.log("Log In");
    }
  return (
    <>
      <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="my-3">
        <label htmlFor="auth-token" className="form-label">Authentication Token</label>
        <input type="text" className="form-control" id="auth-token" placeholder="asd4as6d4asd4a6sd4as6" />
      </div>
      <label htmlFor="inputPassword5" className="form-label">Password</label>
      <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
      <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </div>
      <button className="btn btn-outline-primary float-end" type="submit" onClick={loggingIn}>Log In</button>
    </>
  )
}
