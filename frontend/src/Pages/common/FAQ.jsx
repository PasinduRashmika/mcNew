import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import { ExpandMore } from "@mui/icons-material";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { BottomTopMotion } from "../../components/Motion/BottomTopMotion";
const FAQ = () => {
  return (
    <BasicLayout>
      <PageHeader title="Frequently Asked Questions" />
      <Box
        mt="20px"
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <BottomTopMotion delayTime={0.1}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ color: "text.main" }} variant="h5">
                Question 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              labore natus quae totam neque quis libero tenetur dolore
              dignissimos minus.
            </AccordionDetails>
          </Accordion>
        </BottomTopMotion>
        <BottomTopMotion delayTime={0.2}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ color: "text.main" }} variant="h5">
                Question 2
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              labore natus quae totam neque quis libero tenetur dolore
              dignissimos minus.
            </AccordionDetails>
          </Accordion>
        </BottomTopMotion>
        <BottomTopMotion delayTime={0.3}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ color: "text.main" }} variant="h5">
                Question 3
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              labore natus quae totam neque quis libero tenetur dolore
              dignissimos minus.
            </AccordionDetails>
          </Accordion>
        </BottomTopMotion>
        <BottomTopMotion delayTime={0.4}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ color: "text.main" }} variant="h5">
                Question 4
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              labore natus quae totam neque quis libero tenetur dolore
              dignissimos minus.
            </AccordionDetails>
          </Accordion>
        </BottomTopMotion>
      </Box>
    </BasicLayout>
  );
};

export default FAQ;
