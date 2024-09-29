import React from 'react';
import PropTypes from 'prop-types';
// import {useState} from 'react';


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page">Home</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">About Us</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Contact Us</span>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <li className="modebtns">
                        <button className={`bx bx-${props.mode === 'light' ? 'sun' : 'moon'} `} onClick={props.toggleMode}></button>
                    </li>
                </div>
            </div>
        </nav>
    );
}

// SET THE TYPE OF PROPTS THAT IS RECEIVED
// note : to set proptype first import proptypes

Navbar.prototype = {

    title: PropTypes.string,
    // title : PropTypes.string.isRequired,

    AboutText: PropTypes.string
};


