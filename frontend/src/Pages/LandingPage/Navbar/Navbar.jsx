import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StyledNavbar>
      <Image  src='src/Images/logo.png'/>
      <StyledToggler onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </StyledToggler>
      <StyledNav open={open}>
        <StyledNavItem>
          <StyledLink href="#">Home</StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink href="#">About Us</StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink href="#">Doctors</StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink href="#">Services</StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink href="#">Channeling</StyledLink>
        </StyledNavItem>
      </StyledNav>
    </StyledNavbar>
  );
};


const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const StyledBrand = styled.a`
  font-size: 2rem;
`;

const StyledToggler = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    span {
      display: block;
      width: 30px;
      height: 3px;
      background-color: #fff;
      margin: 5px;
      border-radius: 1px;
      transition: all 0.3s ease-in-out;
    }

    span:nth-of-type(1) {
      transform: ${({ open }) => (open ? 'rotate(-45deg) translate(-5px, 6px)' : 'none')};
    }

    span:nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    span:nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(45deg) translate(-5px, -6px)' : 'none')};
    }
  }
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #fff;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 998;
  }
`;

const StyledNavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-family: 'Arial';
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 200;

  @media (max-width: 768px) {
    color: #000;
  }
`;

const Image = styled.img`
  width: 75px; /* Set the width of the image to your desired value */
  height: auto; /* Keep the aspect ratio of the image */
  margin: 10px;

  @media (max-width: 768px) {
    width: 25px;
    height: auto;
  }
`;

export default Navbar;