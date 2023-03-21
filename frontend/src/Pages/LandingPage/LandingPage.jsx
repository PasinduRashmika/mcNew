import React from 'react';
import { Container } from './LandingPageStyles';
import { LandingPageContainer } from './LandingPageStyles';
import Navbar from './Navbar/Navbar';
import { Content } from './LandingPage Content/Content';
import Footer from '../../components/Footer/Footer';
import { Header } from './Header/Header';
import { LoginButton } from './Button/LoginButton';


const LandingPage = () => {
    return (
        <Container>
            <LandingPageContainer>
                <Navbar />
                <Header />
                <LoginButton />
            </LandingPageContainer>
            <Content />
            <Footer/>
         </Container>
    );
};

export default LandingPage;
