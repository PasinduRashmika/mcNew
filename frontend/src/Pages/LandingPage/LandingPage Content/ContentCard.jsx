import React from "react";
import { CardContent, Typography } from "@mui/material";
import { Container } from "./ContentCardStyles";
import { StyledCard } from "./ContentCardStyles";
import { StyledCardMedia } from "./ContentCardStyles";
import { Button } from "./ContentCardStyles";
import { LineBreak } from "./ContentCardStyles";

const ContentCard = () => {
  return (
    <Container>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" sx={{textTransform:"uppercase"}}>Opening Hours</Typography>
          <LineBreak/>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <LineBreak/>
          <Typography variant="body1">
            Monday - Friday : 8.00 A.M - 4.00 P.M
          </Typography>
          <LineBreak/>
          <Button size="small">Book Appoinment</Button>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <StyledCardMedia
          image="src/Images/medical_care.jpg"
          title="Image title"
        />
        <CardContent>
          <Typography variant="h5" sx={{textTransform:"uppercase"}}>Medical Care</Typography>
          <LineBreak/>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <StyledCardMedia
          image="src/Images/emergency_case.jpg"
          title="Image title"
        />
        <CardContent>
          <Typography variant="h5" sx={{textTransform:"uppercase"}}>Emergency Case</Typography>
          <LineBreak/>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default ContentCard;
