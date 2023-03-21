import styled from "styled-components";


export const DailyContainer = styled.div`
    width:60%;
    border :1px solid #339BFF;
    margin:10% auto ;
    padding: 0 2rem ;
    display:flex ;
    flex-direction:column ;
    border-radius:30px ;
    @media screen and (max-width: 800px){
        margin-top: 30%;
        width: 70%;
        padding: 5%;
    }
`;
export const DailyHeader = styled.div`
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    background: linear-gradient(90deg, rgba(51,155,255,1) 0%, rgba(0,48,255,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`;
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin:10% 0;
    @media screen and (max-width: 800px){
        align-items: center;
        display: grid;
    }
`;
export const Buttons = styled.div`
    margin: 2% 50%;  
    margin-right:0;
    @media screen and (max-width: 800px){
        align-items: center;
        display: grid;
        margin:10% 0;
    }
`;
export const TextBox = styled.div`
    width: 340px;
    display: flex;
    margin:10% 0;
    
    @media screen and (max-width: 800px){
        margin: 2%;
        width: 250px;
    }
`;