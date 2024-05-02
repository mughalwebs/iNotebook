import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                <div className="container-fluid">
                    <Link
                        to='/'
                        className="navbar-brand fs-4 fw-bold"
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
                        <form className='d-flex'>
                            <Link className="btn btn-primary mx-1" to='/login' role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to='/signup' role="button">Signup</Link>
                        </form>
                    </div>
                </div>
            </nav >
        </>
    )
}
