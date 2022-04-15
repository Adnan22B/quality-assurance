import React from 'react'

export default function index() {
  return (
    <React.Fragment>
        <div className="inner-page-banner">
            <div className="container text-center">
                <h1 className='text-primary'>Contact Us</h1>
                <p className='text-primary'>We are here for your help.</p>
            </div>
        </div> 
         <div className="contact-form-wrapper">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contact-wrapper contact-page-form-wrapper">
                                        <div className="form-wrapper">
                                            <h3>Send Us a Message</h3>
                                            <form className="contact-form" method="post">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-6">
                                                        <input type="text" name="fname" placeholder="Full Name"/>
                                                    </div>

                                                    <div className="col-md-12 col-lg-6">
                                                        <input type="email" name="email" placeholder="Email"/>
                                                    </div>

                                                    <div className="col-md-12 col-lg-6">
                                                        <input type="text" name="phone" placeholder="Phone"/>
                                                    </div>

                                                    <div className="col-md-12 col-lg-6">
                                                        <input type="text" name="website" placeholder="Website"/>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <textarea name="message" placeholder="Message"></textarea>
                                                    </div>
                                                    <div className="btn-wrapper">
                                                        <button type="submit" className="custom-btn btn-big grad-style-ef">CONTACT US NOW</button>
                                                    </div>
                                                </div> 
                                            </form> 
                                        </div> 
                                    </div> 
                                </div> 

                                <div className="col-lg-6">
                                    <div className="contact-info floating-contact-info">
                                        <h5>What’s Next?</h5>

                                        <div className="whats-next-wrapper">
                                            <p>
                                                <i className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>An email and phone call from one of our representatives.</p>
                                            <p>
                                                <i className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>A time &amp; cost estimation.</p>
                                            <p>
                                                <i className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>An in-person meeting.</p>
                                        </div> 

                                        <p className="address">
                                            Give us a call
                                            <a href="tel:7021231478">(702) 123-1478</a>
                                        </p> 

                                        <p className="address">
                                            Send us an email
                                            <a href="mailto:info@company.com">info@company.com</a>
                                        </p> 

                                        <div className="social-icons-wrapper">
                                            <p>Follow us on</p>
                                            <ul className="social-icons">
                                                <li>
                                                    <a href="http://www.behance.net/" target="_blank" rel="noopener">
                                                        <i className="fab fa-behance"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://twitter.com/" target="_blank" rel="noopener">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://plus.google.com/discover" target="_blank" rel="noopener">
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://dribbble.com/" target="_blank" rel="noopener">
                                                        <i className="fab fa-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul> 
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div>
    </React.Fragment>
  )
}
