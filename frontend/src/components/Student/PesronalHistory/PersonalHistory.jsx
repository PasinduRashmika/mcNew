import React, { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import { MdSearch, MdAddCircleOutline } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";
import Button from "@mui/material/Button";


import {
  PersonalHistoryContainer,
  StudentHeaderMain,
  StudentHeader,
  Row,
  TextBox,
  Buttons,
  HorizontalRule,
} from "./PersonalHistoryElements";
const PersonalHistory = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <PersonalHistoryContainer>
      <StudentHeaderMain>
        <h2>Add Student</h2>
      </StudentHeaderMain>
      <StudentHeader>
        <h2>Personal History</h2>
      </StudentHeader>
      <form onSubmit={onSubmit}>
        <Row>
          <TextBox>
          <TextField
              fullWidth
              id="outlined-required"
              label="At what attempt did you enter university*"
              //   value={title}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Name of school"
              //   value={title}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
        </Row>
        <Row>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Any of leaving"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Games played in school"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
        </Row>
        <Row>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Games you like to play in the university"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Habits"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
        </Row>
        <Row>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="M.H Commences at (years)"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Normally last (days) Regular/Irregular"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
        </Row>
        <Row>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Hoem Address"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Subjects"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
        </Row>
        <Row>
          <TextBox></TextBox>

          <Buttons>
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              endIcon={<RiArrowRightLine />}
            >
              Save & Next
            </Button>
          </Buttons>
        </Row>
      </form>
    </PersonalHistoryContainer>
  );
};

export default PersonalHistory;
