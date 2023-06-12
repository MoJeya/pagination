import React, { useState } from "react";
import Navbar from "./base-components/Navbar";
import styled from "styled-components";
import DropdownPicker from "./base-components/DropdownPicker";
import NumberedNavigation from "./base-components/NumberdNavigation";

const StyledHeader = styled.header`
  background-color: #fafafa;
  color: white;
  top: 81px;
  left: 0px;
  width: 100%;
  height: auto;
  padding: 1rem;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MainHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.span`
  margin-top: 1rem;
  color: #1aaeb7;
  text-align: center;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.32px;
`;

const H1Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const H1 = styled.span`
  color: #004b44;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: -0.72px;
  text-align: center;
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DropdownPickerWrapper = styled.div`
  margin: 0.5rem;
`;

interface IJobs {
  amountOfJobs: number;
}

const Header: React.FC <IJobs>= (props: IJobs) => {
  const [dropdownStates, setDropdownStates] = useState([false, false, false]);
  const [seletedTitle, setSelectedTitle] = useState("");

  const toggleDropdown = (index: number) => {
    const updatedState = dropdownStates.map((state, i) => (i === index ? !state : false));
    setDropdownStates(updatedState);
  };
  

  return(
      <StyledHeader>
        <Navbar />
        <HeaderContainer>
          <MainHeaderContainer>
            <H3>{props.amountOfJobs} offene Stellen bei Creditplus</H3>
            <H1Container>
              <H1>Hier beginnt deine Zukunft</H1>
            </H1Container>
            <DropDownContainer>
              <DropdownPickerWrapper>
                <DropdownPicker title={"Wähle einen Standort"} isOpen={dropdownStates[0]} toggleDropdown={() => toggleDropdown(0)} />
              </DropdownPickerWrapper>
              <DropdownPickerWrapper>
                <DropdownPicker title={"Wähle eine Stadt"} isOpen={dropdownStates[1]} toggleDropdown={() => toggleDropdown(1)} />
              </DropdownPickerWrapper>
              <DropdownPickerWrapper>
                <DropdownPicker title={"Wähle dein Erfahrungslevel"} isOpen={dropdownStates[2]} toggleDropdown={() => toggleDropdown(2)} />
              </DropdownPickerWrapper>
            </DropDownContainer>
          </MainHeaderContainer>
        </HeaderContainer>
      </StyledHeader>
    );
  };
  
  export default Header;