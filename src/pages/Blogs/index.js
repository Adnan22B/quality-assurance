import React from "react";

export default function index() {
  return (
    <React.Fragment>
      <div className="inner-page-banner">
        <div className="container text-center">
          <h1 className="text-primary">Blogs</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="item col-md-6 col-lg-4">
            <a
              href="blog-details.html"
              className="news-content-block content-block"
            >
              <div className="img-container">
                <img
                  src="assets/images/news/news-3.jpg"
                  alt="Project image"
                  className="img-fluid"
                />
              </div>
              <h5 className="equalHeight">
                <span className="content-block__sub-title">19 May, 2018</span>
                How to Become A Software Engineer?
              </h5>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
