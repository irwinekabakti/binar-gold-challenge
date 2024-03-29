import React, { Fragment } from "react";
import classes from "./Navbar.module.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import link_Paths from "./data";
import logoHome from "../../Images/logo.svg";

const Navbar = () => {
  return (
    <Fragment>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${classes.navbarColor}`}>
        <div className="container-fluid">
          <Nav.Link
            as={Link}
            to="/"
            className={`navbar-brand ${classes.navbarBrand1}`}>
            <img src={logoHome} alt="Home-BCR" />
          </Nav.Link>
          <button
            className={`navbar-toggler ${classes.navTog}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            style={{ width: "50%" }}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
                BCR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {link_Paths.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a
                      className={`nav-link me-4 ${classes.navbarNavLink}`}
                      href={link.path}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
