import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import isLoginContext from '../Context/isLogin/isLoginContext';
import AlertVarsContext from '../Context/AlertVariables/AlertVarsContext';

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
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                <div className="container-fluid">
                    <Link
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
                                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                >
                                    <i className="fa-solid fa-house-laptop fs-3"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/about'
                                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                                >
                                    <i className="fa-solid fa-circle-info fs-3 mx-2"></i>
                                </Link>
                            </li>
                        </ul>
                        {isLogin ?
                            <div>
                                <Link to='/userDetails' className='mx-2 fs-4 btn btn-info'>
                                    <i className="fa-solid fa-user"></i>
                                </Link>
                                <i className="fa-solid fa-right-from-bracket mx-2 me-3 fs-4 btn btn-warning" onClick={handleOnLogout}></i>
                            </div>
                            : <div>
                                <Link className="mx-2 me-3 fs-4 btn btn-light" to='/login'>
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                </Link>
                                <Link className="mx-2 me-3 text-white fs-4 btn btn-primary" to='/signup'>
                                    <i className="fa-solid fa-user-plus"></i>
                                </Link>
                            </div>}
                    </div>
                </div>
            </nav >
        </>
    )
}