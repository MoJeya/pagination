import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em;
`;

const LogButton = styled.button<{ isSelected: boolean }>`
  width: 75px;
  height: 40px;
  border-radius: 45px;
  background-color: ${(props) => (props.isSelected ? '#1AAEB7' : '#F5F5F5')};
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease-in-out;
  position: relative;
  &:active,
  &:focus {
    background-color: #1AAEB7;
  }

  &:hover {
    background-color: #D6F8FB;
  }
`;

const LogoBox = styled.div`


`;

const Label = styled.span`
  width: 51px;
  height: 20px;
  font-family: 'Gotham', sans-serif;
  margin-right: 0.5em;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
  opacity: 1;
`;

const LoginButton: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <ButtonContainer>
      <LogButton isSelected={isSelected} onClick={handleClick}>
        <Label>Login</Label>
          <FontAwesomeIcon icon={faUser} size="sm" />
      </LogButton>
    </ButtonContainer>
  );
};

export default LoginButton;
