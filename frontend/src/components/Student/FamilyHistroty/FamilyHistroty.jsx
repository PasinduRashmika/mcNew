import React, { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import { MdSearch, MdAddCircleOutline } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";
import Button from "@mui/material/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  FamilyHistoryContainer,
  StudentHeader,
  Row,
  TextBox,
  RowButton,
  Buttons,
  TextBoxRow,
  RowOne,
} from "./FamilyHistrotyElements.js";
const FamilyHistory = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submited");
  };
  return (
    <FamilyHistoryContainer>
      <StudentHeader>
        <h2>Family History</h2>
      </StudentHeader>

      <form onSubmit={onSubmit}>
        <Row>
          <TextBox>
            <TextBoxRow>
              <RowOne>
                <p>Father</p>
              </RowOne>
              <RowOne>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup aria-label="status" name="status1" >
                    <FormControlLabel
                      value="Alive"
                      control={<Radio color="primary" />}
                      label="Alive"
                    />
                    <FormControlLabel
                      value="Dead"
                      control={<Radio color="primary" />}
                      label="Dead"
                    />
                  </RadioGroup>
                </FormControl>
              </RowOne>
            </TextBoxRow>
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Occupation"
              //   value={title}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
        </Row>
        <Row>
          <TextBox>
            <TextBoxRow>
              <RowOne>
                <p>Mother</p>
              </RowOne>
              <RowOne>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup aria-label="status" name="status1" >
                    <FormControlLabel
                      value="Alive"
                      control={<Radio color="primary" />}
                      label="Alive"
                    />
                    <FormControlLabel
                      value="Dead"
                      control={<Radio color="primary" />}
                      label="Dead"
                    />
                  </RadioGroup>
                </FormControl>
              </RowOne>
            </TextBoxRow>
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Occupation"
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
              label="Siblings"

              //   value={name}
              //   onChange={e => setName(e.target.value)}
            />
          </TextBox>
          <TextBox>
            <TextField
              fullWidth
              id="outlined-required"
              label="Income"

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
              label="Any family history of Tuberculosis ,Asthma, nervous breakdown, Epilepsy"
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
    </FamilyHistoryContainer>
  );
};

export default FamilyHistory;
