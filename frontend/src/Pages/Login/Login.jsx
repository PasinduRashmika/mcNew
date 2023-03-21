import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
/*import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";*/

const MainContainer = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 200vw;
  background: #F00;
  background: #ffffff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.4rem; */

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  border:1px solid #FFF;
  background: linear-gradient(60deg, rgba(51,155,255,1) 0%, rgba(51,155,255,1) 45%, rgba(42,148,244,1) 56%, rgba(29,101,140,1) 100%);
  @media only screen and (max-width: 320px) {
    width: 150vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color:#FFF;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export const Login = () => {
  return (
    <MainContainer>
      <WelcomeText>Login</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Login" />
      </ButtonContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
};
