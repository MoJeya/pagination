import React, { useState } from "react";
import Navbar from "./base-components/Navbar";
import styled from "styled-components";
import DropdownPicker from "./base-components/DropdownPicker";
import NumberedNavigation from "./base-components/NumberdNavigation";

const StyledHeader = styled.header`
    background-color: #FAFAFA;
    color: white;
    top: 81px;
    left: 0px;
    width: 100%;
    height: 318px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 318px;
  display: flex;
  justify-content: center;
`;

const MainHeaderContainer = styled.div`
  width: 965px;
  height: 158px;
  display: flex;
  flex-direction: column;
`;

const H3 = styled.span`
  margin-top: 80px;
  color: #1AAEB7;
  text-align: center;
  font-family: 'Gotham', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.32px;
`;

const H1Container = styled.div`
  width: 824px;
  height: 48px;
  display: contents;

`;

const H1 = styled.span`
  color: #004B44;
  font-family: 'Gotham', sans-serif;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: -1.44px;
  text-align: center;
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  const [dropdownStates, setDropdownStates] = useState([false, false, false]);

  // const toggleDropdown = (index: number) => {
  //   const updatedState = dropdownStates.map((state, i) => i === index);
  //   setDropdownStates(updatedState);
  // };

  const toggleDropdown = (index: number) => {
    const updatedState = dropdownStates.map((state, i) => (i === index ? !state : false));
    setDropdownStates(updatedState);
  };
  

  return(
    <StyledHeader>
      <Navbar />
      <HeaderContainer>
        <MainHeaderContainer>
          <H3>56 offene Stellen bei Creditplus</H3>
          <H1Container>
            <H1>Hier beginnt deine Zukunft</H1>
          </H1Container>
          <DropDownContainer>
            <DropdownPicker title={"Wähle einen Standort"} isOpen={dropdownStates[0]} toggleDropdown={() => toggleDropdown(0)}/>
            <DropdownPicker title={"Wähle eine Stadt"} isOpen={dropdownStates[1]} toggleDropdown={() => toggleDropdown(1)}/>
            <DropdownPicker title={"Wähle dein Erfahrungslevel"} isOpen={dropdownStates[2]} toggleDropdown={() => toggleDropdown(2)}/>
          </DropDownContainer>
        </MainHeaderContainer>
      </HeaderContainer>
    </StyledHeader>
    );
  };
  
  export default Header;