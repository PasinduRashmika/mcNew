import styled from "styled-components";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100vw;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledCard = styled(Card)`
    padding: 10px;
    margin:10px;
    display: flex;
    flex-direction: column;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 150px;
`;

export const Button = styled.button`
  background-color:'white';
  color:'#00acdf';
  size: small;
`

export const LineBreak = styled.br`
  margin-bottom: '10px';
`