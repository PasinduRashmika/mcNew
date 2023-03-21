import React, { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import { MdSearch, MdAddCircleOutline } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";
import Button from "@mui/material/Button";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import {
  PersonalHistoryContainer,
  StudentHeader,
  Row,
  TextBox,
  Buttons,
  HorizontalRule,
  RowButton
} from "./AddDiaticHistoryElements.js";
const PersonalHistory = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <PersonalHistoryContainer>
      <StudentHeader>
        <h2>Diatic History</h2>
      </StudentHeader>
      <form onSubmit={onSubmit}>
        <Row>
          <TextBox>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Rice" />
    </FormGroup>
          </TextBox>
          <TextBox>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Egg" />
    </FormGroup>
          </TextBox>
        </Row>
        <Row>
          <TextBox>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Vegetables" />
    </FormGroup>
          </TextBox>
          <TextBox>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Fish" />
    </FormGroup>
          </TextBox>
        </Row>
        <Row>
          <TextBox>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Meat" />
    </FormGroup>
          </TextBox>
          <TextBox>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Dry Fish" />
    </FormGroup>
          </TextBox>
        </Row>
        <Row>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Height"
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Weight"
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
              label="Chest expansion insp,"
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Vision (L)"
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
              label=" Exp*"

              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Vision (R)"
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
              label="Teeth"

              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Chest X-Ray"
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
              label="Tuberculin Test : Throat"
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
              label="Tuberculin Test :  B.P"
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
              label="Any Vitamin Deficiencies"
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
              label="Heart"
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
              label="Lungs"
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
              label="Abdomen"
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
              label="Varicose Veins"
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
              label="Central Nervous System"
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
              label="Remarks"
              multiline
              rows={6}
              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          
        </Row>
        <RowButton>
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

        </RowButton>
        
      </form>
    </PersonalHistoryContainer>
  );
};

export default PersonalHistory;
