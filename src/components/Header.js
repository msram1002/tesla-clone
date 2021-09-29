import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <a>
        <img src="./images/logo.svg" alt="tesla_logo"/>
      </a>
      <Menu>

      </Menu>
    </Container>
  )
}

export default Header;

// Header has the Logo
const Container = styled.div`
  min-height: 3.5rem;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

const Menu = styled.div`

`;