import {
  Box,
  FormControlLabel,
  MenuItem,
  RadioGroup,
  TextField,
  FormLabel,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import Radio from "@mui/material/Radio";
import dayjs from "dayjs";
import PageSubHeader from "../../components/PageSubHeader/PageSubHeader";
export const StudentForm1 = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
  setFieldTouched,
}) => {
  return (
    <>
      <PageSubHeader subtitle="Personal Details" style={{}} />
      <br />
      <TextField
        select
        variant="filled"
        value={values.title}
        name="title"
        label="Title"
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.title && !!errors.title}
        helperText={touched.title && errors.title}
      >
        <MenuItem value="mr">Mr.</MenuItem>
        <MenuItem value="miss">Miss.</MenuItem>
        <MenuItem value="mrs">Mrs.</MenuItem>
      </TextField>
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Full Name*"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.fullName}
        name="fullName"
        error={!!touched.fullName && !!errors.fullName}
        helperText={touched.fullName && errors.fullName}
      />
      <DesktopDatePicker
        label="Date of birth"
        inputFormat="DD/MM/YYYY"
        value={dayjs(values?.dateOfBirth).format("DD-MM-YYYY") || ""}
        onChange={(newValue) => {
          setFieldValue("dateOfBirth", dayjs(newValue).format("DD-MM-YYYY"));
          setFieldTouched("dateOfBirth", true);
        }}
        renderInput={(params) => (
          <TextField
            fullWidth
            {...params}
            name="dateOfBirth"
            onBlur={handleBlur}
            error={errors.dateOfBirth && touched.dateOfBirth}
          />
        )}
      />
      <TextField
        select
        labelId="faculty"
        variant="filled"
        value={values.faculty}
        name="faculty"
        label="Faculty"
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.faculty && !!errors.faculty}
        helperText={touched.faculty && errors.faculty}
      >
        <MenuItem value="science">Science</MenuItem>
        <MenuItem value="management">Management and Finance</MenuItem>
        <MenuItem value="humanities">Humanities and Social Science</MenuItem>
        <MenuItem value="fisheries">Fisheries and Marine Science</MenuItem>
      </TextField>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ marginLeft: "20px" }}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            defaultValue="male"
            name="gender"
            value={values.gender}
            sx={{
              display: "flex",
              gridColumn: "span 2",
              justifyContent: "space-between",
            }}
            onChange={(event) => {
              setFieldValue("gender", event.currentTarget.value);
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ marginLeft: "20px" }}>
          <FormLabel component="legend">Martial Status</FormLabel>
          <RadioGroup
            row
            defaultValue="male"
            name="gender"
            value={values.martialStatus}
            sx={{
              display: "flex",
              gridColumn: "span 2",
              justifyContent: "space-between",
            }}
            onChange={(event) => {
              setFieldValue("martialStatus", event.currentTarget.value);
            }}
          >
            <FormControlLabel
              value="married"
              control={<Radio />}
              label="Married"
            />
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single"
            />
          </RadioGroup>
        </Box>
      </Box>
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Home Address *"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.address}
        name="address"
        error={!!touched.address && !!errors.address}
        helperText={touched.address && errors.address}
        multiline
        rows={4}
        maxRows={6}
        autoComplete="off"
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Email *"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name="email"
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.email}
      />
      <TextField
        select
        labelId="level"
        variant="filled"
        value={values.level}
        name="level"
        label="Level"
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.level && !!errors.level}
        helperText={touched.level && errors.level}
      >
        <MenuItem value="level_1">Level 1</MenuItem>
        <MenuItem value="level_2">Level 2</MenuItem>
        <MenuItem value="level_3">Level 3</MenuItem>
        <MenuItem value="level_4">Level 4</MenuItem>
      </TextField>

      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Reg No *"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.regNo}
        name="regNo"
        error={!!touched.regNo && !!errors.regNo}
        helperText={touched.regNo && errors.regNo}
      />
    </>
  );
};
