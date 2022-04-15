import React from 'react'

export default function index() {
  return (
    <section className="newsletter">
    <div className="container">
      <h3 className="text-center">
        Sign up for our newsletter to stay up to <br />date with tech news!
      </h3>

      <form action="#" className="newsletter-form" method="POST">
        <div className="row justify-content-between">
          <div className="col-md">
            <input type="text" name="fname" placeholder="Your Name" />
          </div>
          <div className="col-md">
            <input
              type="text"
              name="email"
              placeholder="Your Email Address"
            />
          </div>

          <div className="col-md-auto">
            <a href="" className="custom-btn btn-big grad-style-ef"
              >SIGN UP FOR FREE</a
            >
          </div>
        </div> 
      </form> 
    </div> 
  </section>
  )
}
