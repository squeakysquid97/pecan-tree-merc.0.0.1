import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-black">
        <div className="container">
          <img
            className="navbar-brand"
            src="https://dsm01pap003files.storage.live.com/y4mqmacusd8rOd8eWfngaYz-YHBKcn8-ssDTaHGzRytX7VuysNiobLz22C9Y76xBEJpAz8NGuk_yO8mQBSDeVE5twmbkBy6mHHeoREfGhPxyBM-rloHvCWrdXrWzzm89SqZ7cvE84TcBY_wCOiAOpjmQHE3CvSvhOZdNtVMNEJNBJ-b21jg7UPJxNmceOr75Pcc?width=360&height=145&cropmode=none"
          />
          <Link className="navbar-brand navbar-title" to="/">
            Pecan Tree Mercantile
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="expand"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="true"
            aria-label="Toggle navigation"
            id="navbarToggleExternalContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
