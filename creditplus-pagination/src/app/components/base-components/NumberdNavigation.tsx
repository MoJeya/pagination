import React from 'react';
import styled from 'styled-components';

interface NumberedNavigationProps {
  currentPage: number;
  totalPages: number;
  onBack: () => void;
  onNext: () => void;
  onPageClick: (pageNumber: number) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 824px;
  margin-top: 4rem;
  margin-bottom: 2rem;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #FAFAFA;
    transform: translateY(-50%);
  }
`;

const Button = styled.button<{ disabled: boolean; isClicked: boolean }>`
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

const NumberContainer = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
`;

const ButtonWithText = styled.button<{ disabled: boolean }>`
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

const Ellipsis = styled.span`
  margin: 4px;
`;

const ELLIPSIS_NUMBER = -1;

const NumberedNavigation: React.FC<NumberedNavigationProps> = ({
  currentPage,
  totalPages,
  onBack,
  onNext,
  onPageClick,
}) => {
  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== Number.parseInt(currentPage.toString())) {
      onPageClick(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const totalPagesNum = Number.parseInt(totalPages.toString());

    if (totalPagesNum <= 3) {
      return Array.from({ length: totalPagesNum }, (_, index) => index + 1);
    }

    const displayedPages = [currentPage - 1, currentPage, currentPage + 1];
    const firstPage = 1;
    const lastPage = totalPages;

    if (currentPage > 3) {
      displayedPages.unshift(ELLIPSIS_NUMBER);
    }
    if (currentPage < totalPages - 2) {
      displayedPages.push(ELLIPSIS_NUMBER);
    }
    

    return displayedPages.filter((page) => page >= firstPage && page <= lastPage);
  };

  return (
    <Container>
      <ButtonWithText disabled={currentPage === 1} onClick={onBack}>
        Back
      </ButtonWithText>
      <NumberContainer>
        {renderPageNumbers().map((pageNumber, index) =>
          typeof pageNumber === 'number' ? (
            <Button
              key={index}
              isClicked={pageNumber === Number.parseInt(currentPage.toString())}
              disabled={pageNumber === Number.parseInt(currentPage.toString())}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </Button>
          ) : (
            <Ellipsis key={index}>...</Ellipsis>
          )
        )}
      </NumberContainer>
      <ButtonWithText disabled={currentPage === totalPages} onClick={onNext}>
        Next
      </ButtonWithText>
    </Container>
  );
};

export default NumberedNavigation;