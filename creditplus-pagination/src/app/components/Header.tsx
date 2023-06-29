import React, { useState } from "react";
import Navbar from "./base-components/Navbar";
import styled from "styled-components";
import DropdownPicker from "./base-components/DropdownPicker";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #fafafa;
  color: white;
  width: 100%;
  height: 36.85vh;
  padding: 1rem;

  @media (max-width: 768px) { /* Adjust the breakpoint to your needs */
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 480px) { /* Adjust the breakpoint to your needs */
    grid-template-columns: repeat(4, 1fr);
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  grid-column-start: 6;
  align-items: center;
  grid-gap: 0.5rem;

  @media (max-width: 480px) {
    grid-column-start: 2;
    grid-row-start: 2;
  }
`;

const MainHeaderContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(6, 0.4fr);
`;

const H3 = styled.span`
  color: #1aaeb7;
  text-align: center;
  font-family: var(--font-family-gotham);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-16);
  grid-row-start: 4;
  height: fit-content;
`;

const H1Container = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-row-start: 5;
  margin-bottom: 1.8rem;
`;

const H1 = styled.span`
  color: #004b44;
  font-family: var(--font-family-gotham);
  font-weight: var(--font-weight-bold);
  font-size: 2.50vw;
  letter-spacing: var(--character-spacing--1-44);
  text-align: center;
`;

const DropDownContainer = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  grid-row-start: 6;
    
  @media (max-width: 480px) {
    grid-auto-flow: row;
    grid-gap: 0.5rem;
  }

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
        {/* <Navbar /> */}
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