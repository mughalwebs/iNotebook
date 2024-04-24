import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link
                        to='/'
                        className="navbar-brand"
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
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/about'
                                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    role="button"
                                >
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                        >
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                        >
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                        >
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    aria-disabled="true"
                                    className="nav-link disabled"
                                >
                                    Disabled
                                </Link>
                            </li>
                        </ul>
                        <form
                            className="d-flex"
                            role="search"
                        >
                            <input
                                aria-label="Search"
                                className="form-control me-2"
                                placeholder="Search"
                                type="search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
