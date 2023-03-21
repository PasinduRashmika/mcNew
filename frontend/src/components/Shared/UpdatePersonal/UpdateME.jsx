import React from "react";
import { TextField } from "@mui/material";
import { RiEdit2Fill } from 'react-icons/ri';
import Button from '@mui/material/Button';


import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {
  UpdateContainar,
  UpdatePersonal,
  TextBox,
  Row,
  UpdateHeader,
  UpdatePassword,
  Buttons,HorizontalRule
} from "./UpdateMeElements";

const titles = [
    {
      value: 'dr',
      Label: 'Dr'
    },
    {
      value: 'mr',
      Label: 'Mr'
    },
    {
      value: 'mrs',
      Label: 'Mrs'
    },
    {
      value: 'miss',
      Label: 'Miss'
    }
  ];


const UpdatePersonalDetails = () => {
    
    const [showPassword, setShowPassword] = React.useState(false);
    const [name, setName] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setNewPassword] = React.useState('');
    const [currentPassword, setOldPwd] = React.useState('');
    const [passwordConfirm, setCheckOldPwd] = React.useState('');

    const onSubmitOne = async e => {
      e.preventDefault();
      console.log("SubmitedOne");
      setCount(' ');
    }
    const onSubmitTwo = async e => {
      e.preventDefault();
      console.log("SubmitedTwo");
      setCount(' ');
    }


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <UpdateContainar>
      <UpdatePersonal>
        <UpdateHeader>
          <h2>Update Personal Details</h2>
        </UpdateHeader>
        <form onSubmit={onSubmitOne}>
        <Row>
          <TextBox>
          <TextField
                  fullWidth
                  id="outlined-required"
                  label="Full Name"
                  defaultValue={name}
                //   onChange={e => setName(e.target.value)}
                />
          </TextBox>
          <TextBox>
          <TextField
                  fullWidth
                  id="outlined-required"
                  label="Title"
                  defaultValue={title}
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
                  defaultValue={email}
                //   onChange={e => setName(e.target.value)}
                />
          </TextBox>
          </Row>
          <Row>
            <Buttons>
          <Button type="submit" variant="contained" color='success' size='small' endIcon={<RiEdit2Fill />}>
                    Update
            </Button>
            </Buttons>
          </Row>
         
        </form>
      </UpdatePersonal>
      <HorizontalRule />
      <UpdatePassword>
        <UpdateHeader>
          <h2>Update Password</h2>
        </UpdateHeader>
        <form onSubmit={onSubmitTwo}>
        <Row>
          <TextBox>
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onChange={e => setNewPassword(e.target.value)}
          />
        </FormControl>
          </TextBox>
          </Row>
          <Row>
          <TextBox>
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={currentPassword}
            onChange={e => setOldPwd(e.target.value)}
          />
        </FormControl>
          </TextBox>
          <TextBox>
          <FormControl sx={{ m: 1, width: '100%'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={passwordConfirm}
            onChange={e => setCheckOldPwd(e.target.value)}
          />
        </FormControl>
          </TextBox>
          </Row>
          <Row>
          <Buttons>
          <Button type="submit" variant="contained" color='success' size='small' endIcon={<RiEdit2Fill />}>
                    Update
            </Button>
            </Buttons>
          </Row>
        </form>
      </UpdatePassword>
    </UpdateContainar>
  );
};

export default UpdatePersonalDetails;
