import * as React from "react"
import {useState} from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {menuData} from '../data/MenuData'
import { StaticImage } from 'gatsby-plugin-image'
import {FaBars} from 'react-icons/fa'
import * as palette from './styles/GlobalStyles'

const isBrowser = typeof window !== "undefined"

const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
        setColorchange(true);
    }
    else {
        setColorchange(false);
    }
  };
  if (isBrowser) {
    window.addEventListener('scroll', changeNavbarColor);
  }

  // menu btn
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (event) => {
    setOpenMenu(event.target.checked);
  }
  return (
    <>
      <Nav className={colorChange ? "scrolled" : "top"}>
        <NavLogo href="/">
          <StaticImage style={Logo} src="../images/jd.png" alt="logo" />
        </NavLogo>
        <CheckBox
          type="checkbox"
          id="menu-btn"
          value={openMenu}
          onChange={handleChange}/>
        <MenuIcon htmlFor="menu-btn">
          <Bars />
        </MenuIcon>
        <NavMenu className={openMenu ? "shown" : ""}>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
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
  /* padding: 0.5rem calc((100vw - 1300px) / 2); */
  padding: 0.5rem 0;
  z-index: 100;
  position: fixed;
  background-color: ${palette.bgColor};
  top: 0;
  align-items: center;
  font-weight: 800;
  transition: all 0.3s ease-out;

  &.top {
    box-shadow: none;
  }
  &.scrolled {
    background-color: #291e2f;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const CheckBox = styled.input`
  display: none;
`

const Bars = styled(FaBars)`
  display: none;
  color: white;

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
  color: rgb(204, 214, 246);
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: #9375ff;
  }

  @media (max-width: 768px) {
    line-height: 40px;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    max-height: 0;
    flex-flow: column;
    overflow: hidden;
    transition: max-height .2s ease-out;

    &.shown {
      position: relative;
      max-height: 300px;
      transition: 0.5s;
    }
  }
`

const Logo = {
  maxWidth: "50px",
  maxHeight: "50px"
};

const NavLogo = styled.a`
  margin-left: 0.5rem;
`