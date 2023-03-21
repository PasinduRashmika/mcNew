import styled from "styled-components";

export const StudentSerchContainer = styled.div`
    width:60%;
    border :1px solid #339BFF;
    margin:3% auto ;
    padding: 0 2rem ;
    display:flex ;
    height:auto;
    flex-direction:column ;
    border-radius:30px ;
    @media screen and (max-width: 950px){
        margin-top: 30%;
        width: 70%;
        padding: 5%;
    }
`;

export const StudentHeader = styled.div`
    font-size: 20px;
    text-align: center;
    /* text-transform: uppercase; */
    letter-spacing:5px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    @media screen and (max-width: 950px){
        font-size: 1rem;
    }
`;
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex:1 0 100%;
    align-items: center;
    width:100%;
    @media screen and (max-width: 950px){
        display: flex;
        align-items: center;
        display: grid;
    }
`;
export const TextBox = styled.div`
    width: 340px;
    margin:3% 5%;
    @media screen and (max-width: 950px){
        margin: 2%;
        width: 100%;
    }
`;
export const Buttons = styled.div`
    margin: 2% 5%;  
    @media screen and (max-width: 950px){
        align-items: center;
        display: grid;
        width:100%;
        margin: 2% 2%;
    }
`;
export const HorizontalRule = styled.hr`
    height: 2px;
    background-color: #49483E;
    border: none;
    margin: 2% 0;
    @media screen and (max-width: 950px){
        display: none;
    }
`;
export const PersonalDetails = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin: 2%;
`;
export const PersonalHeader = styled.div`
    font-size: 15px;
    text-align: left;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    @media screen and (max-width: 950px){
        font-size: 1rem;
        margin:10% 0
    }
`;