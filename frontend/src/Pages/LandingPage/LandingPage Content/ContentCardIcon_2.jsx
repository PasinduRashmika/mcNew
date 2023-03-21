import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Container } from "./ContentCardStyles";
import { StyledCard } from "./ContentCardStyles";
import { LineBreak } from "./ContentCardStyles";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const ContentCardIcon_2 = () => {
  return (
    <Container>
        <StyledCard>
            <CardContent>
                <MoneyOffIcon  color='primary' sx={{fontSize:40}}/>
                <LineBreak/>
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
                <DoneAllIcon  color='primary' sx={{fontSize:40}}/>
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
                <FavoriteBorderIcon  color='primary' sx={{fontSize:40}}/>
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
