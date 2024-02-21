import React from "react"
import Link from 'next/link'
import * as Icon from "react-feather"

import Logo from "../../images/nitco-logo1.png"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="#">
              <a className="navbar-brand">
                <img {...Logo} onClick={toggleNavbar} alt="logo" />
              </a>
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
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" onClick={e => e.preventDefault()}>
                      About <Icon.ChevronDown />
                    </a>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/about-1">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          About Style 1
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-2">
                        <a
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                        >
                          About Style 2
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-3" >
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          About Style 3
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Pages <Icon.ChevronDown />
                    </a>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          Features <Icon.ChevronDown />
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/features">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Features
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/feature-details">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Features Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          Services <Icon.ChevronDown />
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/services-1">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Services Style 1
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services-2"
                          >
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Services Style 2
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services-3">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Services Style 3
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services-4">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Services Style 4
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services-5">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Services Style 5
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/service-details">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Services Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/feedback">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Feedback
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          Projects <Icon.ChevronDown />
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/projects-1">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Project Style 1
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/projects-2">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Project Style 2
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/project-details">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Project Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/team">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Team
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/pricing">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          User <Icon.ChevronDown />
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/login">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Login
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/sign-up">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Sign Up
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/forgot-password">
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Forgot Password
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/faq">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          FAQ's
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/coming-soon">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Coming Soon
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/404">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          404 Error Page
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Blog <Icon.ChevronDown />
                    </a>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/blog-1">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Blog Grid
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog-2">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Blog Right Sidebar
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog-details">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Blog Details
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      CaseStudy <Icon.ChevronDown />
                    </a>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/blog-1">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          CaseStudy Grid
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog-2">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          CaseStudy Right Sidebar
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog-details">
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          CaseStudy Details
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="others-option">
              <Link href="/contact" className="btn btn-light">
                <a>Support</a>
              </Link>
              <Link href="/login" className="btn btn-primary">
                <a>Login</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
