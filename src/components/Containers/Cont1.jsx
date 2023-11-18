import React from 'react';
import styled from 'styled-components';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';
import img6 from '../../images/6.jpg';
import { MdOutlineSouthEast } from 'react-icons/md';

const Container = styled.div`
  padding: 2%;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center; /* Align items vertically */
`;

const RoundedImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: -15px;
  border: 2px solid #fff;
`;

const StyledButton = styled.button`
  display: flex;
  color: white;
  background: transparent;
  border: 2px solid white;
  font-weight: 600;
  padding: 10px;
  font-size: 20px;
  border-radius: 25px;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: aliceblue;
    color: #333;
  }

  svg {
    margin-left: 5px;
  }
`;

const Cont1 = () => {
  return (
    <Container>
      <FlexContainer>
        <RoundedImage src={img4} alt="" />
        <RoundedImage src={img5} alt="" />
        <RoundedImage src={img6} alt="" />
      </FlexContainer>

      <p className='desc_text'>Learn from the best mentors</p>
      <StyledButton>
        Start Learning <MdOutlineSouthEast size={24} style={{ marginLeft: '20px' }} />
      </StyledButton>
    </Container>
  );
};

export default Cont1;
