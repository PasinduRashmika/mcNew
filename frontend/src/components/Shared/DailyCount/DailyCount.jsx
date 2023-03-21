import React from "react";
import { TextField } from "@mui/material";
import { MdSearch } from "react-icons/md";
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import {
    DailyContainer,
    DailyHeader,
    Row,
    Buttons,
    TextBox
  } from "./DailyCoutElements";

  
const DailyCount = () => {
    const [value, setValue] = React.useState(dayjs(Date.now()));
    const [count, setCount] = React.useState('');

    const onSubmit = async e => {
      e.preventDefault();
      console.log("Submited");
      setCount(' ');
    }

  const handleChange = (newValue) => {
    setValue(newValue);
  };
    return (  
        <DailyContainer>
            <DailyHeader><h2>View Daily Count</h2></DailyHeader>
            <form onSubmit={onSubmit}>
            <Row>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
          label="Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{width: '100%' }}  />}
        />
        </LocalizationProvider>

        <Buttons>
          <Button type="submit" variant="contained" color='primary' size='large' endIcon={<MdSearch />}>
                    Search
            </Button>
            </Buttons>
            </Row>

            <Row>
            <TextBox>
          <TextField
                  fullWidth
                  id="outlined-required"
                  label="Daily Count"
                  value={count}
                //   onChange={e => setName(e.target.value)}
                />
          </TextBox>
          
            </Row>
        </form>
        </DailyContainer>
    );
}
 
export default DailyCount;