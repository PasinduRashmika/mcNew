import React from "react";
import PrimaryButton from "../components/Button/PrimaryButton";
import { Paper, Typography } from "@mui/material";
import { navigationData } from "../data/navigationData";
import HomeImage from "../Images/background2.png";
import styled from "styled-components";
import { useStateContext } from "../utils/ContextProvider";
import FileSettingButton from "../components/Button/FileSettingButton";
import { motion } from "framer-motion";
const Container = styled.div`
  width: 50vw;
  height: 50vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem 8rem;
  @media screen and (max-width: 412px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  },

`;

const Home = () => {
  const { authUser, toggleRightSidebar } = useStateContext();
  //for the animation time for the home button
  const animeNumber = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  return (
    <Paper
      sx={{
        backgroundImage: `url(${HomeImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "contain",
        height: "100%",
        background: "secondary.main",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "40px 0",
        backgroundColor: "background.default",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Gumela, san-serif",
            color: "h1.main",
            "@media (max-width:412px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          Welcome
        </Typography>
      </motion.div>
      <Container>
        {navigationData.data[authUser].map((role, index) => {
          return (
            <motion.div
              key={role.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: animeNumber[index], duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {console.log(animeNumber[index])}
              <PrimaryButton title={role.title} to={role.to} Icon={role.icon} />
            </motion.div>
          );
        })}
      </Container>
      <FileSettingButton handler={toggleRightSidebar} />
    </Paper>
  );
};

export default Home;
