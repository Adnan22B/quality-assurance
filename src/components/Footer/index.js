import React from 'react'
import { Link } from 'react-router-dom'


const d = new Date();
let year = d.getFullYear()

export default function index() {
  return (
    <footer className="small-agency-footer  grey-bg"> 

            <div className="footer-nav-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="index.html" className="footer-logo">
                                {/* <img src="images/footer-logo.png" alt="footer logo" /> */}
                                <h3 className='text-white' style={{color: 'white !important'}}>Xillix Tech</h3>
                            </Link>

                            <ul className="social-icons">
                                <li>
                                    <Link to="http://www.behance.net/" target="_blank" rel="noopener">
                                        <i className="fab fa-behance"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="http://twitter.com/" target="_blank" rel="noopener">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="http://plus.google.com/discover" target="_blank" rel="noopener">
                                        <i className="fab fa-google-plus-g"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="http://dribbble.com/" target="_blank" rel="noopener">
                                        <i className="fab fa-dribbble"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="http://youtube.com" target="_blank" rel="noopener">
                                        <i className="fab fa-youtube"></i>
                                    </Link>
                                </li>
                            </ul> 
                        </div> 

                        <div className="col-md-3">
                            <nav className="footer-nav">
                                <h5>Services</h5>
                                <ul className="footer-menu">
                                    <li>
                                        <Link to="logo-and-branding.html">Software Quality Assurance</Link>
                                    </li>
                                    <li>
                                        <Link to="pay-per-click.html">Web Testing </Link>
                                    </li>
                                    <li>
                                        <Link to="website-design.html">App Testing</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div> 

                        <div className="col-md-3">
                            <nav className="footer-nav">
                                <h5>Support</h5>
                                <ul className="footer-menu">
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/blogs">Blogs</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div> 

                        <div className="col-md-3">
                            <nav className="footer-nav">
                                <h5>Resources</h5>
                                <ul className="footer-menu"> 
                                    <li>
                                        <Link to="about-us.html">Term & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="team.html">Privacy Policy</Link>
                                    </li> 
                                </ul>
                            </nav>
                        </div> 
                    </div> 
                </div> 
            </div> 

            <div className="footer-bottom">
                <div className="container">
                    <p className="text-center">&copy; {year}. All rights reserved by  
                        <Link to="http://xillixtech.com/" target="_blank"> XillixTech (PVT LTD)</Link>.</p>
                </div> 
            </div> 
        </footer>
  )
}
