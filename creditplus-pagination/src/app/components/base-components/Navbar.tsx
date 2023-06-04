import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: #333;
    padding: 1rem;
    color: #fff;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLink = styled.a`
    color: #fff;
    margin-left: 1rem;
    text-decoration: none;
`;

const Logo = styled.h1`
    color: #fff;
`;


const Navbar: React.FC = () => {
    return (
        <Nav>
            <NavContainer>
                <Logo>Logo</Logo>
                <ul>
                    <li><NavLink>PLACEHOLDER</NavLink></li>
                    <li><NavLink>PLACEHOLDER</NavLink></li>
                    <li><NavLink>PLACEHOLDER</NavLink></li>
                </ul>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;