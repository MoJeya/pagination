import React, {useState} from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  padding: 5px;
  margin: 1rem;
  position: absolute
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
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
            <DropdownButton onClick={toggleDropdown}>{props.title}</DropdownButton>
            <DropdownContent open={isOpen}>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </DropdownContent>
        </DropdownContainer>
    )
}

export default Dropdown;