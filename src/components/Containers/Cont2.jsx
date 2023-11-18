import React from 'react';
import styled from 'styled-components';
import { MdOutlineSouthEast } from 'react-icons/md';

const Container = styled.div`
  padding: 2%;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #D6D3D1;
  align-items: center; /* Align items vertically */
`;

const StyledPara = styled.p`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
const sentences = ["Free Edit", "Interactive", "Easy Interface", "Compare to Other"];
const Cont2 = () => {
  return (
    <Container>
        {sentences.map((sentence, index) => (
        <FlexContainer key={index}>
          <StyledPara>{sentence}</StyledPara>
          <MdOutlineSouthEast size={24} style={{ marginLeft: '20px' }} />
        </FlexContainer>
      ))}
    </Container>
  );
};

export default Cont2;
