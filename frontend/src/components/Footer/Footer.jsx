import React from "react";
import { useState } from "react";
import img from "../../Images/logo.png";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  FooterContainer,
  FooterSection,
  FooterSection2,
  FooterRightColumn,
  FooterLeftColumn,
  FooterColumn,
  Logo,
  Link1,
  Links,
  HR,
  Text,
  Name,
  H1,
  Image,
  SubSection,
  Span
} from "./FooterElements";

const Footer = () => {
  const[view,setView] = useState(false);
  console.log(window.innerWidth);
const resize = ()=>{
    if(window.innerWidth >= 800){
        setView(true);
       
    }else{
        setView(false);
        
    }
}
window.addEventListener('scroll',resize);
  return (
    <FooterContainer>
      <FooterSection>
        <Logo>
          <Image src={img}/>
        </Logo>
        <Name>
          {/* <H1>University of Ruhuna <br/> Hostel Management System</H1> */}
          <H1> Medical Center Administrative Management System</H1>
        </Name>
      </FooterSection>
      <SubSection>
        {
          view ? 
                <FooterSection>
                <FooterLeftColumn>
                  <HR/>
                  <Links>
                    <Link1 className="FooterLink">
                      {/* <Link to = ""> */}
                        Privacy
                      <Span className="Ho"></Span>
                      {/* </Link> */}
                    </Link1>
                    <Link1 className="FooterLink">
                      {/* <Link to = "/not-found"> */}
                        Services
                      <Span className="Ho"></Span>
                      {/* </Link> */}
                    </Link1>
                    <Link1 className="FooterLink">
                      {/* <Link to = ""> */}
                        About Us
                      <Span className="Ho"></Span>
                      {/* </Link> */}
                    </Link1>
                    <Link1 className="FooterLink">
                      {/* <Link to = "/contact-us"> */}
                        Contact Us
                      <Span className="Ho"></Span>
                      {/* </Link> */}
                    </Link1>
                  </Links>
                </FooterLeftColumn>
                
                <FooterRightColumn>
                  <HR/>
                  <Text>
                  The University provides good quality accommodation facilities by its own in-campus large hostel complexes and the others, located in the immediate neighborhood of the main premises.  Student accommodation is administered by the Student Affairs Branch in accordance with the rules and regulations articulated by the University.</Text>
                </FooterRightColumn>
              </FooterSection>
            :
              <FooterSection2>
                <FooterColumn>
                  <HR/>
                  <Links>
                    <Link1 className="FooterLink">
                      {/* <Link to = ""> */}
                        Privacy
                      <Span className="Ho"></Span>
                      {/* </Link> */}
                    </Link1>
                    <Link1 className="FooterLink">
                      {/* <Link to = "/not-found"> */}
                        Services
                      <Span className="Ho"></Span>
                      {/* </Link> */}
                    </Link1>
                    <Link1 className="FooterLink">
                      {/* <Link to = ""> */}
                        About Us
                      <Span className="Ho"></Span>
                      {/* </Link> */}
                    </Link1>
                    <Link1 className="FooterLink">
                      {/* <Link to = "/contact-us"> */}
                        Contact Us
                      <Span className="Ho"></Span>
                      {/* </Link> */}
                    </Link1>
                  </Links>
                </FooterColumn>
              </FooterSection2>
        }
      </SubSection>
      <FooterSection>
        {/* <Copyright>
        <p>©{new Date().getFullYear()} Department of Computer Science. | All Rights Reserved. </p>
        </Copyright> */}
        
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
