import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;
  border-radius: 45px;
  margin-top: 0.5em;
  margin-right: 0.5em;
  height: 40px;


  
`;

const SwitchButton = styled.button<{ isSelected: boolean, id: string}>`
  width: ${(props) => (props.id === 'sw1' ? '75px' : '100px')};
  height: 40px;
  border-radius: 45px;
  padding: padding-box;
  background-color: ${(props) => (props.isSelected ? '#1AAEB7' : '#F5F5F5')};
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease-in-out;
  position: relative;
  z-index: ${(props) => (props.isSelected ? '2' : '1')};
  margin-right: -6px;
  &:hover {
    background-color: #D6F8FB;
  }
`;


const Label = styled.span<{ isSelected: boolean}>`
  width: 51px;
  height: 20px;
  text-align: left;
  font-family: 'Gotham', ;
  font-size: 18px;
  letter-spacing: -0.36px;
  line-height: 28px;
  color:${(props) => (props.isSelected ? '#FFFFFF' : '#8E8E8E')};
  opacity: 1;
`;

const SwitchButtonContainer: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <Container>
      <SwitchButton
        isSelected={selectedButton === 'Switch 1'}
        onClick={() => handleButtonClick('Switch 1')}
        id='sw1'
      >
      <Label isSelected={selectedButton === 'Switch 1'}>Private</Label>
      </SwitchButton>
      <SwitchButton
        isSelected={selectedButton === 'Switch 2'}
        onClick={() => handleButtonClick('Switch 2')}
        id='sw2'
      >
      <Label isSelected={selectedButton === 'Switch 2'}>Business</Label>
      </SwitchButton>
    </Container>
  );
};

export default SwitchButtonContainer;