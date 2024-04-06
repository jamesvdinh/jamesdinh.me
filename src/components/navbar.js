import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import * as palette from "./styles/GlobalStyles"
import { StaticImage } from "gatsby-plugin-image"
import Resume from "../../static/Resume.pdf"

const isBrowser = typeof window !== "undefined"

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [addAnimation, setAddAnimation] = useState(false)
  const [openMenu, setOpenMenu] = useState(false) // menu btn

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setAddAnimation(true)
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  const checkIfAnchored = () => {
    if (window.scrollY >= 20) {
      setAddAnimation(true)
      setScrolled(true)
    }
  }

  useEffect(() => {
    if (isBrowser) {
      checkIfAnchored() // Call the function once when the component mounts
      window.addEventListener("scroll", changeNavbarColor)
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener("scroll", changeNavbarColor)
      }
    }
  }, [])

  var openNavClick = false
  var nav_is_open = false // boolean if click on nav menu is initial click to open

  const handleChange = () => {
    if (!openMenu) {
      setOpenMenu(true)
      nav_is_open = true
      openNavClick = true

      // Check if user clicks outside of navbar menu
      if (isBrowser) {
        document.addEventListener(
          "click",
          function (event) {
            // If user either clicks X button OR clicks outside the modal window, then close modal
            if (!openNavClick && nav_is_open) {
              if (
                event.target.matches(".menu-btn") ||
                !event.target.closest(".nav-container") ||
                event.target.matches(".navlink")
              ) {
                setOpenMenu(false)
                nav_is_open = false
              }
            }
            openNavClick = false
          },
          false
        )
      }
    }
  }

  return (
    <>
      <Nav
        className={`nav-container ${scrolled ? "scrolled" : "top"} ${
          addAnimation ? "animated" : ""
        }`}
      >
        <NavLogoA href="/">
          <StaticImage style={Logo} src="../images/jd.png" alt="logo" />
        </NavLogoA>
        <CheckBox
          type="checkbox"
          id="menu-btn"
          className="menu-btn"
          checked={openMenu}
          onChange={handleChange}
        />
        <MenuIcon htmlFor="menu-btn">
          <Bars />
        </MenuIcon>
        <NavMenu className={openMenu ? "shown" : ""}>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index} className="navlink">
              {item.title}
            </NavLink>
          ))}
          <LinkButton href={Resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </LinkButton>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavBar

const Nav = styled.nav`
  background: transparent;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 100;
  position: fixed;
  background-color: unset;
  box-shadow: unset;
  top: 0;
  left: 0;
  align-items: center;
  &.top {
    animation: fade-only-top 0.3s ease;
  }
  &.top.animated {
    animation: fadeout-from-top 0.3s ease;
  }
  &.scrolled {
    background-color: #291e2f;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
    margin: auto;
    border-radius: 10px;
    column-gap: 10px;
    width: fit-content;
    justify-content: center;
    left: 50%;
    top: 10px;
    transform: translate(-50%, 0);
  }
  &.scrolled.animated {
    animation: fadein-from-top 0.3s ease;
  }

  @media only screen and (max-width: 768px) {
    & {
      display: block;
    }
    &.top.animated {
      animation: unset;
    }
    &.scrolled {
      transition: all 0.3s;
      animation: unset;
      border-radius: unset;
      justify-content: space-between;
      top: 0;
      left: unset;
      width: 100%;
      transform: unset;
    }
    &.scrolled.animated {
      animation: unset;
    }
  }
  @keyframes fade-only-top {
    0% {
      transform: translate(0, -60px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes fadein-from-top {
    0% {
      transform: translateY(0px);
      justify-content: space-between;
      background-color: unset;
      box-shadow: unset;
      width: 100%;
      transform: translate(-50%, 0);
      top: 0;
    }
    30% {
      transform: translate(-50%, -60px);
      justify-content: space-between;
    }
    100% {
      transform: translate(-50%, 0);
      justify-content: center;
    }
  }

  @keyframes fadeout-from-top {
    0% {
      transform: translate(-50%, 0);
      justify-content: center;
      width: fit-content;
      margin: auto;
      column-gap: 10px;
      background-color: #291e2f;
      box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
      left: 50%;
    }
    30% {
      transform: translate(-50%, -60px);
      justify-content: space-between;
      left: 50%;
    }
    100% {
      transform: translateY(0);
    }
  }
`

const CheckBox = styled.input`
  display: none;
`

const Bars = styled.div`
  display: none;
  background: rgb(123, 123, 123);
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;

  &:before,
  &:after {
    background: rgb(123, 123, 123);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  &:before {
    top: 5px;
  }

  &:after {
    top: -5px;
  }

  ${CheckBox}:checked + & {
    background: transparent;
  }

  ${CheckBox}:checked + &:before {
    transform: rotate(-45deg);
  }

  ${CheckBox}:checked + &:after {
    transform: rotate(45deg);
  }

  @media (max-width: 768px) {
    display: block;
    position: relative;
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const MenuIcon = styled.label`
  cursor: pointer;
  display: flex;
  position: relative;
  float: right;
  right: 1rem;
  height: 50px;
  align-items: center;
`

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem 0.3rem;
  margin: 0 0.7rem;
  height: 100%;
  color: rgb(182, 149, 236);
  cursor: pointer;
  background: linear-gradient(#9375ff 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.08em);
  transition: 0.2s var(--t, 0s),
    background-position 0.1s calc(0.3s - var(--t, 0s));
  &:hover {
    --p: 100%;
    --t: 0.2s;
    color: #fff;
  }

  @media (max-width: 768px) {
    line-height: 40px;
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  @media (max-width: 768px) {
    transition: all 0.5s;
    text-align: center;
    max-height: 0;
    flex-flow: column;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #362441;
    border-radius: 10px;
    &.shown {
      position: relative;
      max-height: 300px;
      padding: 0 0 10px;
    }
  }
`

const LinkButton = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  padding: 7px 10px;
  margin-right: 10px;
  background-color: #ae9ee908;
  color: ${palette.titleColor};
  border: 1px solid ${palette.titleColor};
  cursor: pointer;

  &:hover {
    border: 1px dashed #cbbff5;
    color: #cbbff5;
    background-color: #ae9ee91a;
  }

  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`

const Logo = {
  minWidth: "50px",
  minHeight: "50px",
  maxWidth: "50px",
  maxHeight: "50px",
}

const NavLogoA = styled.a`
  margin-left: 0.5rem;
`
