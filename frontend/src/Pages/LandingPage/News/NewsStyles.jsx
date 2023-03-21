import styled from "styled-components";

export const Paper = styled.div`
    margin:'10px';
    padding:'10px';
`

export const Box = styled.div`
    background-color: '#b2beb5';
    color: 'black';
    height: '60px';
    padding: '16px';
    text-align: 'center';
    width: fit-content;

    @media (max-width: 768px) {
        width: fit-content;
    }
`