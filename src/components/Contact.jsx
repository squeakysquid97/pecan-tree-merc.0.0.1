import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://www.michaelandsusanhawaii.com/wp-content/uploads/2012/08/home_sunset-trees_900x400.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-5 text-white">
            <h1 className="font-weight-light">Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;