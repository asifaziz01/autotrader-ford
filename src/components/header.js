import React, { useEffect } from "react"
import { Button, Navbar, Nav } from "react-bootstrap"

import LogoSVG from "./icons/logo"
import FordLogoSVG from "./icons/fordLogo"

export default ({ siteTitle }) => {
  const openNavigation = () => {
    const navItem = document.querySelectorAll(
      ".navbar_bottom .navbar .nav-item"
    )
    navItem.forEach(function (element) {
      element.classList.remove("show")
    })
    if (
      document.querySelector(".navbar_bottom .navbar").classList.toggle("open")
    ) {
      setTimeout(() => {
        document
          .querySelectorAll(".navbar_bottom .navbar .nav-item")
          .forEach(function (element) {
            element.classList.add("show")
          })
      }, 351)
    } else {
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", e => {
        if (
          e.target.outerWidth >= 1200 &&
          document
            .querySelector(".navbar_bottom .navbar")
            .classList.contains("open")
        ) {
          document.querySelector(".navbar .navbar_toggle").click()
        }
      })
    }
  }, [])
  return (
    <header>
      <div className="navbar_top">
        <div className="navbar_container">
          <a
            className="navbar_brand"
            onClick={() => {
              /*
                TODO: window dataLayer push 
              */
            }}
            href="//autotrader.ca"
            aria-label="autotrader"
          >
            <LogoSVG className="d-none d-sm-block" height={62} width={100} />
            <LogoSVG className="d-sm-none" height={50} width={80} />
          </a>
          <a
            className="navbar_brand_right"
            rel="nofollow"
            href="//www.ford.ca?utm_source=autoTRADER&utm_medium=referral"
            onClick={() => {
              /*
                TODO: window dataLayer push 
              */
            }}
            aria-label="ford"
          >
            <FordLogoSVG height={40} width={97} />
          </a>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="navbar_bottom_container">
          <Navbar
            variant="dark"
            expand="xl"
            collapseOnSelect
            onToggle={openNavigation}
            aria-owns="toggler"
          >
            <Navbar.Toggle
              id="toggler"
              className="navbar_toggle"
              onClick={() => {
                /*
                  TODO: window dataLayer push 
                */
              }}
              aria-controls="auto-ford-nav"
              aria-selected={false}
            >
              <span className="navbar_toggle_stripes" />
              <span className="navbar_toggle_stripes" />
              <span className="navbar_toggle_stripes" />
            </Navbar.Toggle>
            <Navbar.Collapse id="auto-ford-nav" className="navbar_collapse">
              <Nav>
                <Nav.Item role="button">BUILT WILD</Nav.Item>
                <Nav.Item role="button">EXPERT BUILT</Nav.Item>
                <Nav.Item role="button">KIT IT OUT</Nav.Item>
                <Nav.Item role="button">LEGENDARY BUILT</Nav.Item>
              </Nav>
            </Navbar.Collapse>
            <Button
              variant={false}
              active={true}
              className="switch-lang"
              onClick={e => {
                // navigate("/en/")
              }}
            >
              EN
            </Button>
            <Button
              variant={false}
              className="switch-lang"
              onClick={e => {
                // navigate("/fr/")
              }}
            >
              FR
            </Button>
          </Navbar>
        </div>
      </div>
    </header>
  )
}
