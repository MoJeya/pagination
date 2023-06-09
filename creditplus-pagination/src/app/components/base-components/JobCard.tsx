import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

// const CardContainer = styled.div`
//   width: 874px;
//   height: 145px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 1rem;
//   margin-top: 1rem;
// `;

// const TopInfoContainer = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;

// `;

// const CategoryLabel = styled.h3`
//   font-size: 14px;
//   font-family: 'Gotham', sans-serif;
//   color: #1AAEB7;
//   margin-bottom: 0.5rem;
// `;

// const MoreInfo = styled.span`
//     width: 118px;
//     font-size: 16px;
//     font-family: 'Gotham', sans-serif;
//     font-weight: 500;
//     color: #1AAEB7;
//     text-align: right;
//     margin-top: 0.5rem;
// `;

// const JobTitleContainer = styled.div`
//   width: 770px;
//   height: 20px;
//   color: #292929;
//   margin-top: 0.5rem;
//   font-size: 18px;
//   font-family: 'Gotham', sans-serif;

// `;

// const LocationAndOtherInf = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     widht: 143px;
//     margin-top: 1rem;

// `;

// const Content = styled.span`
//     font-family: 'Gotham', sans-serif;
//     font-weight: Book;
//     font-size: 16px;
//     text-align: left;

// `;

const CardContainer = styled.div`
  width: 100%; /* Adjust the width to fit any screen */
  max-width: 874px; /* Set a maximum width to prevent the card from becoming too wide */
  height: 145px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

const TopInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CategoryLabel = styled.h3`
  font-size: 14px;
  font-family: 'Gotham', sans-serif;
  color: #1AAEB7;
  margin-bottom: 0.5rem;
`;

const MoreInfo = styled.span`
  width: 118px;
  font-size: 16px;
  font-family: 'Gotham', sans-serif;
  font-weight: 500;
  color: #1AAEB7;
  text-align: right;
  margin-top: 0.5rem;
`;

const JobTitleContainer = styled.div`
  width: 100%;
  max-width: 770px;
  height: 20px;
  color: #292929;
  margin-top: 0.5rem;
  font-size: 18px;
  font-family: 'Gotham', sans-serif;
`;

const LocationAndOtherInf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  max-width: 346px;
  margin-top: 1rem;
`;

const Content = styled.span`
  font-family: 'Gotham', sans-serif;
  font-weight: Book;
  font-size: 16px;
  text-align: left;
`;


interface IJobCardProps {
  category: string;
  title: string;
  location: string;
  employmentStatus: string;
}

const JobCard: React.FC<IJobCardProps> = (props: IJobCardProps) => {
  return (
    <CardContainer>
      <TopInfoContainer>
        <CategoryLabel>{props.category}</CategoryLabel>
        <MoreInfo>{"Stelle anzeigen"}</MoreInfo>
      </TopInfoContainer>  
      <JobTitleContainer>{props.title}</JobTitleContainer>
      <LocationAndOtherInf>
        <Content>
            <FontAwesomeIcon icon={faLocationDot} size="sm" style={{ marginRight: '10px' }}/>
            {props.location}
        </Content>
        <Content>
            <FontAwesomeIcon icon={faClock} size="sm" style={{ marginRight: '10px' , marginLeft: '15px'}}/>
            {props.employmentStatus}
        </Content>
      </LocationAndOtherInf>
    </CardContainer>
  );
};

export default JobCard;