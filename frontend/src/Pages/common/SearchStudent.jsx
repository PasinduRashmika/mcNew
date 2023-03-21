import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Select,
  TextField,
  Typography,
  useTheme,
  FormLabel,
  Checkbox,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageSubHeader from "../../components/PageSubHeader/PageSubHeader";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import SearchIcon from "@mui/icons-material/Search";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import Autocomplete from "react-google-autocomplete";
import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { BasicButton } from "../../components/Button/BasicButton";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { FormControlLayout } from "../../components/layout/FormControlLayout";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
export const SearchStudent = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  //handling submit
  const handlePersonalDetailsUpdate = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };
  const handlePasswordUpdate = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, 2, null));
  };

  const personalInitialValues = {
    title: "mr",
    fullName: "",
    email: "",
    position: "doctor",
    mobile: "",
    location: "",
  };

  //for validation checkup schema for User form
  const updatePersonalSchema = yup.object().shape({
    title: yup.string().required(),
    fullName: yup.string().required("required field"),
    email: yup.string().email().required("Required Field"),
    location: yup.string().required(),
    mobile: yup
      .string()
      .length(10, "Must contains 10 digit")
      .required("Mobile Number is Required"),
  });
  const updatePasswordSchema = yup.object().shape({
    currentpassword: yup.string().required("Password is Required"),
    newpassword: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
    confirmnewpassword: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required")
      .oneOf([yup.ref("newpassword")], "Your password do not match."),
  });
  return (
    <BasicLayout>
      <PageHeader title="Search Student" subtitle="Students  Details" />
      <Formik
        onSubmit={handlePersonalDetailsUpdate}
        initialValues={personalInitialValues}
        validationSchema={updatePersonalSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <FormControlLayout onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Reg No "
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="xx-xxxx-xxxxx"
              value={values.regNo}
              name="regNo"
            />
            <BasicButton
              title="Search"
              color="none"
              textColor="button.text"
              hoverColor="button.dark"
              hoverTextColor="button.hoverText"
              icon={<SearchIcon />}
              type="submit"
              handler={handleSubmit}
              style={{ marginTop: "0" }}
            />
            <PageSubHeader subtitle="Personal Details" />
            <br />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Registration No"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.regNo}
              name="Registration No"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="Email"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Age"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.age}
              name="Age"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Date of Birth"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.dateOfBirth}
              name="Date of Birth"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Faculty"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.faculty}
              name="Faculty"
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginLeft: "20px" }}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
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
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
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
              variant="outlined"
              type="text"
              label="Address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address}
              name="Address"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Subjects"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.subjects}
              name="Subjects"
              multiline
              maxRows={4}
            />
            <PageSubHeader subtitle="Family History" />
            <br />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginLeft: "20px" }}>
                <FormLabel component="legend">Father</FormLabel>
                <RadioGroup
                  row
                  name="father"
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
                    value="alive"
                    control={<Radio />}
                    label="Alive"
                  />
                  <FormControlLabel
                    value="dead"
                    control={<Radio />}
                    label="Dead"
                  />
                </RadioGroup>
              </Box>
            </Box>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Occupation"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.occupation}
              name="Occupation"
            />

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginLeft: "20px" }}>
                <FormLabel component="legend">Mother</FormLabel>
                <RadioGroup
                  row
                  name="mother"
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
                    value="alive"
                    control={<Radio />}
                    label="Alive"
                  />
                  <FormControlLabel
                    value="dead"
                    control={<Radio />}
                    label="Dead"
                  />
                </RadioGroup>
              </Box>
            </Box>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Occupation"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.occupation}
              name="Occupation"
            />

            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Siblings"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.siblings}
              name="Siblings"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Income"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.income}
              name="Income"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Any family history of Tuberculosis ,Asthma, nervous breakdown, Epilepsy"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.subjects}
              name="familyHstory"
              multiline
              maxRows={4}
            />
            <br />
            <PageSubHeader subtitle="Personal History" />
            <br />
            <Select
              labelId="attempt"
              variant="outlined"
              value={values.attempt}
              name="attempt"
              label="Attempt"
              onChange={handleChange}
            >
              <MenuItem value="1st_Attempt">1st Attempt</MenuItem>
              <MenuItem value="2nd_Attempt">2nd Attempt</MenuItem>
              <MenuItem value="3rd_Attempt">3rd Attempt</MenuItem>
            </Select>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="School"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.school}
              name="School"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Age of Leaving"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.ageOfLeaving}
              name="Age of Leaving"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Any Awards in School"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.anyAwardsInSchool}
              name="Any Awards in School"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Games played in school"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gamesPlayedInSchool}
              name="Games played in school              "
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Games you like to play in the university "
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.universityGames}
              name="Games you like to play in the university"
              multiline
              maxRows={4}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginLeft: "20px" }}>
                <FormLabel component="legend">Habits</FormLabel>
                <RadioGroup
                  row
                  name="habits"
                  value={values.gender}
                  sx={{
                    display: "flex",
                    gridColumn: "span 2",
                    justifyContent: "space-between",
                  }}
                  onChange={(event) => {
                    setFieldValue("habits", event.currentTarget.value);
                  }}
                >
                  <FormControlLabel
                    value="alcohol"
                    control={<Checkbox />}
                    label="Alcohol"
                  />
                  <FormControlLabel
                    value="tobacco"
                    control={<Checkbox />}
                    label="Tobacco"
                  />
                  <FormControlLabel
                    value="betelChewing"
                    control={<Checkbox />}
                    label="Betel Chewing"
                  />
                  <br />
                </RadioGroup>
              </Box>
            </Box>

            {/* <Typography
              variant="h6"
              sx={{ ml: "10px", color: "#222", mt: "10%"}}
            >
              M.H Commenced at <TextField
              variant="standard"
              type="text"
              label=""
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.anyAwardsInSchool}
              name=""
            /> years Normally last <TextField
            variant="standard"
            type="text"
            label=""
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.anyAwardsInSchool}
            name=""
          />  days.
            </Typography> */}
            <br />
            <PageSubHeader subtitle="Dietetic History" />
            <br />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginLeft: "20px" }}>
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  row
                  name="habits"
                  value={values.gender}
                  sx={{
                    display: "flex",
                    gridColumn: "span 2",
                    justifyContent: "space-between",
                  }}
                  onChange={(event) => {
                    setFieldValue("dietetic", event.currentTarget.value);
                  }}
                >
                  <FormControlLabel
                    value="rice"
                    control={<Checkbox />}
                    label="Rice"
                  />
                  <FormControlLabel
                    value="vegetables"
                    control={<Checkbox />}
                    label="Vegetables"
                  />
                  <FormControlLabel
                    value="meat"
                    control={<Checkbox />}
                    label="Meat"
                  />
                  <FormControlLabel
                    value="fish"
                    control={<Checkbox />}
                    label="Fish"
                  />
                  <FormControlLabel
                    value="egg"
                    control={<Checkbox />}
                    label="Egg"
                  />
                  <FormControlLabel
                    value="dryFish"
                    control={<Checkbox />}
                    label="Dry Fish"
                  />
                  <br />
                </RadioGroup>
              </Box>
            </Box>
            <br />

            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Height"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.anyAwardsInSchool}
              name="height"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Weight"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.anyAwardsInSchool}
              name="weight"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Chest expansion insp,"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.chestInsp}
              name="chestInsp"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Chest expansion Exp,"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.chestIExp}
              name="chestExp"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Vision(L)"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.visionL}
              name="VisionL"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Vision(R)"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.visionR}
              name="VisionR"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Hearing"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.hearing}
              name="hearing"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Teeth"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.teeth}
              name="Teeth"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Chest X-Ray"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.chestXRay}
              name="ChestXRay"
              multiline
              maxRows={4}
            />
            <br />

            <Typography
              variant="h6"
              sx={{ ml: "10px", color: "text.sub", mt: "10%" }}
            >
              Tuberculin Test
            </Typography>
            <br />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Throat"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.throat}
              name="Throat"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="B.P."
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.bp}
              name="B.P."
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Any Vitamin Deficiencies"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.anyVitamin}
              name="Any Vitamin Deficiencies"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Heart"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.heart}
              name="Heart"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Lungs"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lungs}
              name="Lungs"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Abdomen"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.abdomen}
              name="Abdomen"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Varicose Veins"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.varicoseVeins}
              name="Varicose Veins"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Central Nervous System"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.centralNervousSystem}
              name="Central Nervous System"
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Remarks"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.remarks}
              name="Remarks"
              multiline
              maxRows={4}
            />
            <br />

            <BasicButton
              title="Submit"
              color="success"
              textColor="button.text"
              hoverColor="button.dark"
              hoverTextColor="button.hoverText"
              icon={<DoneAllOutlinedIcon />}
              type="submit"
              handler={handleSubmit}
              style={{ marginTop: "0" }}
            />
          </FormControlLayout>
        )}
      </Formik>
    </BasicLayout>
  );
};
