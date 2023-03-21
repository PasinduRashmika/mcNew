import styled from "styled-components";

export const Container = styled.div`
  width: 98vw;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const LandingPageContainer = styled.div`
  background-image: url('src/Images/cover.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  //clip-path: box(85% at right);

  @media screen and (max-width: 768px) {
    height: auto;
    width: auto;
  }
`;