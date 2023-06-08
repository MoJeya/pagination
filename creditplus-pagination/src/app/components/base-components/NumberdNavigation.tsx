import React, { useState } from 'react';
import styled from 'styled-components';

interface NumberedNavigationProps {
  currentPage: number;
  totalPages: number;
  onBack: () => void;
  onNext: () => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ disabled: boolean, isClicked: boolean}>`
  background-color: ${(props) => (props.isClicked ? '#D6F8FB' : 'transparent')};
  color: ${(props) => (props.disabled ? '#999' : '#333')};
  border: none;
  border-radius: 100%;
  padding: 8px 16px;
  margin: 4px;
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#D6F8FB')};
  }
`;

const ButtonWithText =  styled.button<{ disabled: boolean}>`
    color: ${(props) => (props.disabled ? '#999' : '#333')};
    background-color: transparent;
    border: none;
    border-radius: 100%;
    padding: 8px 16px;
    margin: 4px;
    font-size: 14px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    &:hover {
      color: #D6F8FB;
    }
`;

// const size = 10; // Set the desired size of the array
// const booleanArray: boolean[] = Array(size).fill(false);


const NumberedNavigation: React.FC<NumberedNavigationProps> = ({
  currentPage,
  totalPages,
  onBack,
  onNext,
  }) => {
    const clickedArr: boolean[] = Array(totalPages).fill(false);
    const [isClicked, setIsClicked] = useState<boolean[]>(clickedArr);

    const handleNumberClick = (pageNumber: number) => {
        const updatedClickedArr = Array(totalPages).fill(false);
        updatedClickedArr[pageNumber - 1] = true;
        setIsClicked(updatedClickedArr);
    };
      return (
          <Container>
            <ButtonWithText disabled={currentPage === 1} onClick={() => {onBack}}>
              Back
            </ButtonWithText>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <Button isClicked={isClicked[pageNumber-1]}
                  key={pageNumber}
                  disabled={pageNumber === currentPage}
                  onClick={() => {
                    handleNumberClick(pageNumber);
                  }}
                >
                  {pageNumber}
                </Button>
              )
            )}
            <ButtonWithText disabled={currentPage === totalPages} onClick={() => {onNext}}>
              Next
            </ButtonWithText>
          </Container>
      );
  };

export default NumberedNavigation;