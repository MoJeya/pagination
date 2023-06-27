import React, { useState } from "react";
import Navbar from "./base-components/Navbar";
import styled from "styled-components";
import DropdownPicker from "./base-components/DropdownPicker";
// import "../../../public/styles/fonts.css"

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #fafafa;
  color: white;
  width: 100%;
  height: auto;
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
`;

const H3 = styled.span`
  margin-top: 1rem;
  color: #1aaeb7;
  text-align: center;
  font-family: 'Gotham-Bold', sans-serif;
`;

const H1Container = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  margin-top: 1rem;
`;

const H1 = styled.span`
  color: #004b44;
  font-family: 'Gotham-Medium', sans-serif;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: -0.72px;
  text-align: center;
`;

const DropDownContainer = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
    
  @media (max-width: 480px) { /* Adjust the breakpoint to your needs */
    grid-auto-flow: row;
    grid-gap: 0.5rem;
  }

`;

const DropdownPickerWrapper = styled.div`
  margin: 0.5rem;
`;

// const StyledHeader = styled.header`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   background-color: #fafafa;
//   color: white;
//   width: 100%;
//   height: auto;
//   padding: 1rem;

//   @media (max-width: 480px) { /* Adjust the breakpoint to your needs */
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

// const HeaderContainer = styled.div`
//   width: 100%;
//   grid-column-start: 1;
//   align-items: center;
//   grid-gap: 0.5rem;

//   @media (max-width: 480px) { /* Adjust the breakpoint to your needs */
//     grid-column-start: auto;
//     grid-row-start: 2;
//   }
// `;

// const MainHeaderContainer = styled.div`
//   width: 100%;
//   display: grid;
//   justify-items: center;
// `;

// const H3 = styled.span`
//   margin-top: 1rem;
//   color: #1aaeb7;
//   text-align: center;
//   font-family: 'Gotham-Bold', sans-serif;
// `;

// const H1Container = styled.div`
//   width: 100%;
//   display: grid;
//   justify-items: center;
//   margin-top: 1rem;
// `;

// const H1 = styled.span`
//   color: #004b44;
//   font-family: 'Gotham-Medium', sans-serif;
//   font-weight: bold;
//   font-size: 48px;
//   letter-spacing: -0.72px;
//   text-align: center;
// `;

// const DropDownContainer = styled.div`
//   width: 100%;
//   display: grid;
//   grid-auto-flow: column;
//   align-items: center;
//   justify-content: center;
//   grid-gap: 1rem;

//   @media (max-width: 480px) { /* Adjust the breakpoint to your needs */
//     grid-auto-flow: row;
//     grid-gap: 0.5rem;
//   }
// `;

// const DropdownPickerWrapper = styled.div`
//   margin: 0.5rem;
// `;


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