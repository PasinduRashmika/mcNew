import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Container } from "./ContentCardStyles";
import { StyledCard } from "./ContentCardStyles";
import { LineBreak } from "./ContentCardStyles";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export const ContentCardIcon_1 = () => {
  return (
    <Container>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" sx={{textTransform:"uppercase"}}>Our Services</Typography>
          <LineBreak/>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
            <RemoveRedEyeIcon  color='primary' sx={{fontSize:40}}/>
            <LineBreak/>
            <Typography variant="h5" sx={{textTransform:"uppercase"}}>Free Checkup</Typography>
            <LineBreak/>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
            <SentimentSatisfiedAltIcon  color='primary' sx={{fontSize:40}}/>
            <LineBreak/>
            <Typography variant="h5" sx={{textTransform:"uppercase"}}>Expert Consultancy</Typography>
            <LineBreak/>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
        </CardContent>
      </StyledCard>
    </Container>
  )
}
