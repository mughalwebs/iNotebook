import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import isLoginContext from '../Context/isLogin/isLoginContext';
import AlertVarsContext from '../Context/AlertVariables/AlertVarsContext';
import { Tooltip } from 'react-tooltip';

export default function Navbar() {
    const alertContext = useContext(AlertVarsContext);
    const { setAlertStatus, setAlertMessage, settingAlertMessageLoading } = alertContext;
    const { isLogin } = useContext(isLoginContext);
    let location = useLocation();
    const handleOnLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        location.pathname = '/login';
        setAlertStatus('warning');
        setAlertMessage('Successfully Logged Out. Please Login Again to Edit the Note.');
        settingAlertMessageLoading();
    }
    return (
        <div className='remove-typing-cursor'>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                <div className="container-fluid">
                    <Link
                        data-tooltip-id='iNotebook'
                        to='/'
                        className="navbar-brand fs-4 fw-bold remove-typing-cursor"
                    >
                        iNotebook
                    </Link>
                    <button
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-bs-target="#navbarSupportedContent"
                        data-bs-toggle="collapse"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to='/'
                                    aria-current="page"
                                    data-tooltip-id='Home'
                                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                >
                                    <i className="fa-solid fa-house-laptop fs-3"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/about'
                                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                                    data-tooltip-id='AboutUs'
                                >
                                    <i className="fa-solid fa-circle-info fs-3 mx-2"></i>
                                </Link>
                            </li>
                        </ul>
                        {isLogin ?
                            <div>
                                <Link to='/userDetails' className='mx-2 fs-4 btn btn-info' data-tooltip-id='UserDetails'>
                                    <i className="fa-solid fa-user"></i>
                                </Link>
                                <i className="fa-solid fa-right-from-bracket mx-2 me-5 fs-4 btn btn-warning" data-tooltip-id='Logout' onClick={handleOnLogout}></i>
                            </div>
                            : <div>
                                <Link className="mx-2 me-3 fs-4 btn btn-info" to='/login' data-tooltip-id='Login'>
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                </Link>
                                <Link className="mx-2 me-5 text-white fs-4 btn btn-primary" to='/signup' data-tooltip-id='Signup'>
                                    <i className="fa-solid fa-user-plus"></i>
                                </Link>
                            </div>}
                        {/* ToolTips */}
                        <Tooltip id="Logout" place="bottom" effect="solid" content="Sure to log out?" style={{
                            color: 'black',
                            backgroundColor: '#FFCA2C',
                            borderRadius: '5px',
                        }} />
                        <Tooltip id="UserDetails" place="bottom" effect="solid" content="Your Details" style={{
                            color: 'black',
                            backgroundColor: '#31D2F2',
                            borderRadius: '5px',
                        }} />
                        <Tooltip id="AboutUs" place="bottom" effect="solid" content="About iNotebook" style={{
                            color: 'white',
                            backgroundColor: '#gray',
                            borderRadius: '5px',
                        }} />
                        <Tooltip id="Home" place="bottom" effect="solid" content="Go to Your Notes" style={{
                            color: 'white',
                            backgroundColor: '#gray',
                            borderRadius: '5px',
                        }} />
                        <Tooltip id="iNotebook" place="bottom" effect="solid" content="iNotebook" style={{
                            color: 'white',
                            backgroundColor: '#gray',
                            borderRadius: '5px',
                        }} />
                        <Tooltip id="Signup" place="bottom" effect="solid" content="Create a New Account" style={{
                            color: 'white',
                            backgroundColor: '#0D6EFD',
                            borderRadius: '5px',
                        }} />
                        <Tooltip id="Login" place="bottom" effect="solid" content="Login to Your Account" style={{
                            color: 'black',
                            backgroundColor: '#31D2F2',
                            borderRadius: '5px',
                        }} />
                    </div>
                </div>
            </nav >
        </div>
    )
}