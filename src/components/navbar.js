import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { StaticImage } from "gatsby-plugin-image"

const isBrowser = typeof window !== "undefined"

const NavBar = () => {
  const [colorChange, setColorchange] = useState(false)
  const [openMenu, setOpenMenu] = useState(false) // menu btn

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  useEffect(() => {
    if (isBrowser) {
      changeNavbarColor() // Call the function once when the component mounts
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

  const handleChange = event => {
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
      <Nav className={`nav-container ${colorChange ? "scrolled" : "top"}`}>
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
  animation: fadeout-from-top 0.3s ease;

  &.top {
    box-shadow: none;
  }
  &.scrolled {
    background-color: #291e2f;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
    margin: auto;
    border-radius: 10px;
    column-gap: 10px;
    width: fit-content;
    animation: fadein-from-top 0.3s ease;
    justify-content: center;
    left: 50%;
    top: 10px;
    transform: translate(-50%, 0);
  }

  @media only screen and (max-width: 768px) {
    & {
      display: block;
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
  }

  @keyframes fadein-from-top {
    0% {
      transform: translateY(0px);
      justify-content: space-between;
      background-color: unset;
      box-shadow: unset;
      width: 100%;
      transform: translate(-50%, 0);
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
  padding: 0 1rem;
  height: 100%;
  color: rgb(182, 149, 236);
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: #9375ff;
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
    margin: 10px 0 0;
    background-color: #362441;
    border-radius: 10px;
    &.shown {
      position: relative;
      max-height: 300px;
    }
  }
`

const Logo = {
  maxWidth: "50px",
  maxHeight: "50px",
}

const NavLogoA = styled.a`
  margin-left: 0.5rem;
`
