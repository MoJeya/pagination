import React from "react";
import Navbar from "./base-components/Navbar";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #EAEAEA;
    color: white;
    top: 81px;
    left: 0px;
    width: 100%;
    height: 318px;
`;

const Header = () => (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
  
  export default Header;