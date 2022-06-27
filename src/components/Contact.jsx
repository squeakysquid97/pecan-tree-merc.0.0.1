import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://dsm01pap003files.storage.live.com/y4ms9HmEnC5aw3gd9ZQRHkThf1-mUBhJl2_GQ9nogloNmap-rNVnztB7Y2oD2-zFOfgwXA63Yu-uTaJyfBmmGG2HSqcBnK8YBsxsSyIo-v8lM9Cfx-CJv6doqhnX6-r8aknaip_uu0QZQTnx7HGiWqu7utnh9Uh6QskdsmrsJg_D2qe4FKXiF2JyYaw7KCiLrpG?width=960&height=720&cropmode=none"
              alt=""
            />
          </div>
          <div className="col-lg-5  blurb rounded ">
            <h1 className="font-weight-light">Contact Us</h1>
            <ul className="contact-list text-left">
              <li>
                Phone : <a href="tel:6827032863">+1 (682) 703-2863</a>{" "}
              </li>
              <li>
                Email :{" "}
                <a href="mailto:csr@pecantreemercantile.com">
                  csr@pecantreemercantile.com
                </a>
              </li>
              <li>
                Address:{" "}
                <a href="https://goo.gl/maps/3jCNbkCREVijDffh6" target="_blank">
                  5316 Trail Lake Dr Fort Worth, TX 76133
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
