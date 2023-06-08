import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import styled from 'styled-components';

// const DropdownContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin-top: 1rem;
//   width: 320px;
//   height: 44px;
//   border: 1px solid #C3C3C3;
//   border-radius: 5px;
//   position: absolute;
//   text-align: center;
// `;

// const DropdownButton = styled.button`
//   background-color: transparent;
//   border: none;
//   padding: 0;
//   font-size: 1rem;
//   cursor: pointer;
//   text-align: end;
// `;

// const DropdownContent = styled.div<{ open: boolean }>`
//   display: ${(props) => (props.open ? 'flex' : 'none')};
//   position: absolute;
//   top: 100%;
//   left: 0;
//   min-width: 160px;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   z-index: 1;
//   flex-direction: column;
//   width: inherit;
// `;

// const DropdownItem = styled.a`
//   display: block
//   padding: 0.5rem;
//   color: #333;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;

const DropdownContainer = styled.div<{open: boolean}>`
    display: inline-block;
    position: relative;
    margin-top: 1rem;
    margin-right: 1rem;
    width: 320px;
    height: 44px;
    border: 1px solid ${(props) => (props.open ? '#58DEE6' : '#C3C3C3')};
    border-radius: 8px;
    text-align: center;
    
    &:hover {
      border: 1px solid #58DEE6;
    }

    &:focus {
      border: 1px solid #58DEE6;
    }

`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
  text-align: end;
  padding: 0.6rem;
`;

const DropdownContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  flex-direction: column;
  border-radius: 8px;
`;

const DropdownItem = styled.a`
  display: block
  padding: 0.5rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Lable = styled.span<{open: boolean}>`
  text-align: left;
  font-family: 'Gotham', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.open ? '#2C2C2C' : '#8E8E8E'};
  margin-right: 5px;
`;

interface DropdownProps {
    title: string;
    isOpen: boolean;
    toggleDropdown: () => void;
    // dropdownitems?: string[];
}

const DropdownPicker: React.FC<DropdownProps> = (props: DropdownProps) => {
  const { title, isOpen, toggleDropdown } = props;
    return (
        <DropdownContainer open={isOpen}>
            <DropdownButton onClick={toggleDropdown}>
              <Lable open={isOpen}>{title}</Lable>
              {isOpen ? <FontAwesomeIcon icon={faCaretUp} size="2xs" /> : <FontAwesomeIcon icon={faCaretDown} size="2xs" />}
            </DropdownButton>
            <DropdownContent open={isOpen}>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </DropdownContent>
        </DropdownContainer>
    )
}

export default DropdownPicker;