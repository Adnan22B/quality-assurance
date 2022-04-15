import React from 'react'

export default function index() {
  return (
    <React.Fragment>
          <div className="inner-page-banner">
            <div className="container text-center">
                <h1 className='text-primary'>About Us</h1>
                <p className='text-primary'>What makes a company great? That’s simple. It’s the people who work here.</p>
            </div>
        </div> 
        {/*  */}
        <section className="about-us section-padding inner-page-about-us">
            <svg className="bg-shape shape-about reveal-from-bottom" 
                width="779px" height="759px">
                <defs>
                    <linearGradient id="PSgrad_03" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                        <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                        <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                    </linearGradient>

                </defs>
                <path fillRule="evenodd" fill="url(#PSgrad_03)" d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
                />
            </svg>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="assets/images/inner-page-about-img.jpg" alt="about image" className="img-fluid img-round"/>
                    </div>

                    <div className="col-lg-6">
                        <h2>We’re Your Partner in Your Success</h2>
                        <p>Aenean consectetur massa quis sem volutpat, a condimentum tortor pretium. Cras id ligula consequat,
                            sagittis nulla at, sollicitudin lorem. Orci varius natoque penatibus et magnis dis parturient
                            montes.
                        </p>
                        <p>Cras id ligula consequat, sagittis nulla at, sollicitudin lorem. Orci varius natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Phasellus eleifend, dolor vel condimentum
                            imperdiet.
                        </p>
                        <div className="counter-wrapper inner-page-counter-wrapper d-flex justify-content-between">
                            <div className="inner-block">
                                <div className="counter-block d-block txt-grad-ef">
                                    <span className="counter">450</span>+
                                </div>
                                HAPPY
                                <br/>CLIENTS
                            </div>
                            <div className="inner-block">
                                <div className="counter-block d-block txt-grad-ab">
                                    <span className="counter">2500</span>+
                                </div>
                                PROJECTS
                                <br/>COMPLETED
                            </div>
                            <div className="inner-block">
                                <div className="counter-block d-block txt-grad-cd">
                                    <span className="counter">4510</span>+
                                </div>
                                RUNNING
                                <br/>PROJECTS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
