import React, {useState} from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  padding: 1px;
  margin-top: 1rem;
  width: 94px;
  height: 20px;
  position: absolute
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
  text-align: end;
`;

const DropdownContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  flex-direction: column;
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

const Lable = styled.span`
  width: 64px;
  height: 20px;
  text-align: left;
  font-family: 'Gotham', sans-serif;
  font-weight: medium;
  color: #2C2C2C;
`;

interface DropdownProps {
    title: string;
    // dropdownitems?: string[];
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <Lable>{props.title}</Lable>
            </DropdownButton>
            <DropdownContent open={isOpen}>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </DropdownContent>
        </DropdownContainer>
    )
}

export default Dropdown;