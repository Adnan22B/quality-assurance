import React from 'react'

export default function index() {
  return (
    <section className="services">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 m-b-30">
          <a
            href="app-development-services.html"
            target="_blank"
            rel="noopener"
            className="service-box text-center content-block"
          >
            <div className="box-bg grad-style-ab"></div>
            <span className="icon-container grad-style-ab-light">
              <i
                className="
                  ml-des-57-upload-download-sync-application-device-mobile-computer
                  txt-grad-ab
                "
              ></i>
            </span>
            <h5 className="text-center">App Testing</h5>
            <p>
              The absolute best experts of your UI and UX to ensure that you
              get the app that is best suited to your needs and your business.
              Contact us now to get your personalized app.
            </p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 m-b-30">
          <a
            href="Web-development-service.html"
            target="_blank"
            rel="noopener"
            className="service-box text-center content-block"
          >
            <div className="box-bg grad-style-ef"></div>
            <span className="icon-container grad-style-ef-light">
              <i
                className="
                  ml-tec-45-responsive-mobile-phone-tablet-computer-desktop-monitor-laptop
                  txt-grad-ef
                "
              ></i>
            </span>
            <h5 className="text-center">Web Testing</h5>
            <p>
              Your website design and development is an integral part of your
              business. The development part is crucial because the back end
              procedures are the complicated ones and need the most attention.
            </p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 m-b-30">
          <a
            href="search-engine-optimization.html"
            target="_blank"
            rel="noopener"
            className="service-box text-center content-block"
          >
            <div className="box-bg grad-style-cd"></div>
            <span className="icon-container grad-style-cd-light">
              <i
                className="
                  ml-tec-8-search-magnifier-computer-desktop-monitor-laptop
                  txt-grad-cd
                "
              ></i>
            </span>
            <h5 className="text-center">Software Quality Assurance</h5>
            <p>
              Digital Marketing works wonders and boosts up your sales and
              online presence effectively and efficiently. We offer you a
              chance to shoot up your business prospects by working with us.
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
