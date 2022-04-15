import React from 'react'
import { Link } from "react-router-dom";



export default function index() {
  return (
    <nav className="navbar navbar-expand-lg solid-bg">
    <div className="container">
        <Link className="navbar-brand" to="/">
            {/* <img style={{width: "5%"}} src="assets/images/brand-logo.png" alt="Brand Logo" className="img-fluid" /> */}
            <h3>Xillix Tech</h3>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            <span className="custom-toggler-icon bar1"></span>
            <span className="custom-toggler-icon bar2"></span>
            <span className="custom-toggler-icon bar3"></span>
        </button> 

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-md-auto typo-color-c align-items-center">
                
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-opener" to="#">
                        Services
                    </Link>
                    <div className="custom-dropdown-menu">
                    <Link className="dropdown-item" to="/sqa">Software Quality Assurance</Link>

                        <Link className="dropdown-item" to="/website-testing">Website Testing</Link>
                        <Link className="dropdown-item" to="/app-testing">Mobile App Testing</Link>
                    </div>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="team.html">Team</Link>
                </li> */}
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">contacts</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link custom-btn btn-mid grad-style-cd" to="contact.html" data-toggle="modal" data-target="#get-a-quote-modal">GET A QUOTE</Link>
                </li> */}
            </ul> 
        </div> 
    </div> 
</nav>
  )
}
