import React from 'react';
import styled from 'styled-components';

function Section({ title, desc, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={ backgroundImg }>
      <ItemText>
        <h1>{ title }</h1>
        <p>{ desc }</p>
      </ItemText>
      <Buttons>
        <ButtonGrp>
          <LeftBtn>{ leftBtnText }</LeftBtn>
          {/* Show only if right btn text exists */}
          { rightBtnText &&
          <RightBtn>{ rightBtnText }</RightBtn> }
        </ButtonGrp>
        <DownArrow src="/images/down-arrow.svg">
        </DownArrow>
      </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGrp = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftBtn = styled.div`
  background-color: rgba(23,26,2,0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8rem;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.85rem; 
  cursor: pointer;
  margin: 0.5rem;
`;

// inherit properties from LeftBtn
const RightBtn = styled(LeftBtn)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled.img`
  height: 2.5rem;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  
`;
