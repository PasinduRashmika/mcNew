import React, { useState } from "react";
import { TextField } from "@mui/material";
import { MdSearch, MdAddCircleOutline } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";
import Button from "@mui/material/Button";
import { RiEdit2Fill } from 'react-icons/ri';
import { GrAdd } from "react-icons/gr";

import {
  StudentSerchContainer,
  StudentHeader,
  Row,
  TextBox,
  Buttons,
  HorizontalRule,
  PersonalDetails,
  PersonalHeader
} from "./StudentSearchElements";

const StudentSearch = () => {
  const onSubmit = async e => {
    e.preventDefault();
    console.log("Submited");
  }

  return (
    <StudentSerchContainer>
        <StudentHeader>
          <h2>Search Student</h2>
        </StudentHeader>
        <form onSubmit={onSubmit}>
          <Row>
            <TextBox>
              <TextField
                fullWidth
                id="outlined-required"
                label="Registration NO"
                // defaultValue={nameOne}
                // onChange={(e) => setNameOne(e.target.value)}
              />
            </TextBox>

            <Buttons>
              <Button
                type="button"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<MdSearch />}
              >
                Search
              </Button>
            </Buttons>
          </Row>

          <HorizontalRule />

          <PersonalDetails>
        <PersonalHeader>
          <h2>Personal Details</h2>
        </PersonalHeader>
        
        <Row>
          <TextBox>
          <TextField
                  fullWidth
                  id="outlined-required"
                  label="Full Name"
                //   value={name}
                //   onChange={e => setName(e.target.value)}
                />
          </TextBox>
          <TextBox>
          <TextField
                  fullWidth
                  id="outlined-required"
                  label="Title"
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
                  label="Email"
                //   value={name}
                //   onChange={e => setName(e.target.value)}
                />
          </TextBox>
          <TextBox>
          <TextField
                  fullWidth
                  id="outlined-required"
                  label="Reg No"
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
                  label="Age"
                //   value={name}
                //   onChange={e => setName(e.target.value)}
                />
          </TextBox>
          <TextBox>
          <TextField
                  fullWidth
                  id="outlined-required"
                  label="Date of Birth"
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
                  label="Gender"
                //   value={name}
                //   onChange={e => setName(e.target.value)}
                />
          </TextBox>
          <TextBox>
          <TextField
                  fullWidth
                  id="outlined-required"
                  label="Civil State"
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
                  label="Faculty"
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
            <TextBox>
              
            </TextBox>

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
      </PersonalDetails>


        </form>
    </StudentSerchContainer>
  );
};

export default StudentSearch;
