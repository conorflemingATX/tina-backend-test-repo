import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

import Logo from "../../images/nitco-logo1.png";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="#" className="navbar-brand">
              <img {...Logo} onClick={toggleNavbar} alt="logo" />
            </Link>
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    About <Icon.ChevronDown />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/about-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        About Style 1
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/about-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        About Style 2
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/about-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        About Style 3
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="nav-link"
                  >
                    Pages <Icon.ChevronDown />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Features <Icon.ChevronDown />
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/features"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Features
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/feature-details"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Features Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Services <Icon.ChevronDown />
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/services-1"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 1
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/services-2"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 2
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/services-3"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 3
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/services-4"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 4
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/services-5"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Style 5
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service-details"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/feedback"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Feedback
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Projects <Icon.ChevronDown />
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/projects-1"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Project Style 1
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/projects-2"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Project Style 2
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/project-details"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Project Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/team"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/pricing"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        User <Icon.ChevronDown />
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/login"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Login
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/sign-up"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Sign Up
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/forgot-password"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Forgot Password
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/faq"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        FAQ's
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/coming-soon"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Coming Soon
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/404"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        404 Error Page
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="nav-link"
                  >
                    Blog <Icon.ChevronDown />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/blog-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Grid
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/blog-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Right Sidebar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/blog-details"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="nav-link"
                  >
                    CaseStudy <Icon.ChevronDown />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/blog-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        CaseStudy Grid
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/blog-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        CaseStudy Right Sidebar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/blog-details"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        CaseStudy Details
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="others-option">
              <Link href="/contact" className="btn btn-light">
                Support
              </Link>
              <Link href="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
