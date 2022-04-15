import React from 'react'

export default function index() {
  return (
    <section className="case-study small-agency-case-study">
      <svg
        className="bg-shape shape-case reveal-from-left" 
        width="779px"
        height="759px"
      >
        <defs>
          <linearGradient
            id="PSgrad_04"
            x1="70.711%"
            x2="0%"
            y1="70.711%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
            <stop
              offset="100%"
              stopColor="rgb(237,247,255)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path
          fillRule="evenodd"
          fill="url(#PSgrad_04)"
          d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
        />
      </svg>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="case-study">
              <div className="item">
                <h2>We Lead from the Front.</h2>
                <p>
                  FWe are proud to have the best team of creative thinkers and
                  fantastic clients from across the world, trusting our
                  developing, designing, and branding.
                </p>
                <p>
                  Our approach To be the number one choice for businesses when
                  it comes to digital product development, design, quality, and
                  innovation.
                </p>
              </div>
            </div> 
          </div>
          <div className="img-container col-lg-6">
            <img
              src="assets/images/image.png"
              alt="case study image"
              className="img-fluid"
            />
          </div>
        </div>
      </div> 
    </section>  )
}
