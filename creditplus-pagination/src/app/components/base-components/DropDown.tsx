import React, {useState} from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  margin-left: 1rem;
`;

const DropdownButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  padding: 0 20px;
  font-size: 1rem;
  cursor: pointer;
`;

const DropdownContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;

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