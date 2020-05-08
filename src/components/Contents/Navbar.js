import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Title>Navbar</Title>
      <ContentContainer>
        <div>TEST -  Navbar</div>
      </ContentContainer>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: auto;
  border: 2px solid #aaa69d;
  border-radius: 4.5px;
  width: 90%;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #131313;
  margin-bottom: auto;
  padding: 40px;
`;