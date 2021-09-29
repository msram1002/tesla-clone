import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section 
        title="Model S" 
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory" />
      <Section 
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory" />
      <Section 
        title="Model 3" 
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory" />
      <Section 
        title="Model X" 
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory" />
      <Section 
        title="Lowest Cost Solar Panels in Americs" desc="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More" />
      <Section 
        title="Solar for New Roofs" 
        desc="Solar Roof Costs Less Than a New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More" />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`
