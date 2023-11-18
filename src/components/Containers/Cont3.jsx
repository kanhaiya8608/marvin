import React from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Container = styled.div`
  padding: 2%;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  text-align: left;
  align-items: center; /* Align items vertically */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlexCont2 = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledHead = styled.h3`
  font-size: 55px;
  font-weight: 600;
`;

const StyledP = styled.p`
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Cont3 = () => {
  return (
    <Container>
      <FlexContainer>
        <StyledHead>+20K</StyledHead>
        <StyledP>
          <FlexCont2>
            Glass Pattern Generated in this week in the first release
            <MdOutlineKeyboardDoubleArrowDown size={50} />
          </FlexCont2>
        </StyledP>
      </FlexContainer>
    </Container>
  );
};

export default Cont3;
