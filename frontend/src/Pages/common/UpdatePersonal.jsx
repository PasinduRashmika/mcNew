import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import Autocomplete from "react-google-autocomplete";
import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { BasicButton } from "../../components/Button/BasicButton";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { FormControlLayout } from "../../components/layout/FormControlLayout";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import { BottomTopMotion } from "../../components/Motion/BottomTopMotion";

export const UpdatePersonal = () => {
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
    title: "",
    fullName: "",
    email: "",
    position: "",
    mobile: "",
    location: "",
  };
  const passwordInitialValues = {
    currentpassword: "",
    newpassword: "",
    confirmnewpassword: "",
  };

  //for validation checkup schema for User form
  const updatePersonalSchema = yup.object().shape({
    title: yup.string().required("required field"),
    fullName: yup.string().required("required field"),
    email: yup.string().email().required("Required Field"),
    position: yup.string().required("required field"),
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
      <PageHeader title="Personal Details" subtitle="Update Personal Details" />
      {/* UPDATE PERSONAL DETAILS FORM */}
      <BottomTopMotion delayTime={0.1}>
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
            handleReset,
          }) => (
            <FormControlLayout onSubmit={handleSubmit}>
              <Typography
                variant="h5"
                sx={{
                  gridColumn: "span 2",
                  color: "text.main",
                  fontWeight: 600,
                }}
              >
                Update Personal Details
              </Typography>
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
                <MenuItem value="none">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="dr">Dr.</MenuItem>
                <MenuItem value="mr">Mr.</MenuItem>
                <MenuItem value="miss">Miss.</MenuItem>
                <MenuItem value="mrs">Mrs.</MenuItem>
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ManageAccountsRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                select
                variant="filled"
                labelId="positionId"
                id="position"
                name="position"
                value={values.position}
                label="Position"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.position && !!errors.position}
                helperText={touched.position && errors.position}
              >
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="nurse">Nurse</MenuItem>
                <MenuItem value="dentist">Dentist</MenuItem>
                <MenuItem value="receptionist">Receptionist</MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="phi">PHI</MenuItem>
                <MenuItem value="head">MCHead</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="pharmacy">Pharmacy</MenuItem>
                <MenuItem value="studentaffairbranch">
                  Student Affair Branch
                </MenuItem>
              </TextField>
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ManageAccountsRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="tel"
                name="mobile"
                label="Mobile *"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
                error={!!touched.mobile && !!errors.mobile}
                helperText={touched.mobile && errors.mobile}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ManageAccountsRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Autocomplete
                className="location"
                style={{
                  width: "100%",
                  paddingLeft: "13px",
                  height: "8vh",
                  border: "1px solid rgb(224,224,224)",
                  borderRadius: "6px",
                  fontSize: "17px",
                  color: theme.palette.text.main,
                  backgroundColor: theme.palette.background.default,
                  "&:focus": {
                    borderWidth: "2px",
                    borderColor: theme.palette.primary.main,
                    fontSize: "20px",
                  },
                }}
                apiKey={"AIzaSyABX4LTqTLQGg_b3jFOH8Z6_H5CDqn8tbc"}
                onPlaceSelected={(place) => {
                  setFieldValue("location", place?.formatted_address);
                }}
                types={["address"]}
                componentRestrictions={{ country: "us" }}
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Box
                sx={{
                  gridColumn: "span 2",
                  display: "flex",
                  justifyContent: "space-around",
                  "> button": {
                    "@media (max-width:412px)": {
                      transform: "scale(0.8)",
                      ":hover": {
                        transform: "scale(0.85)",
                      },
                    },
                  },
                }}
              >
                <BasicButton
                  title="Update"
                  color="none"
                  textColor="button.text"
                  hoverColor="button.dark"
                  hoverTextColor="button.hoverText"
                  icon={<DoneAllOutlinedIcon />}
                  type="submit"
                  handler={handleSubmit}
                />

                <BasicButton
                  title="Reset"
                  color="none"
                  textColor="button.text"
                  hoverColor="button.dark"
                  hoverTextColor="button.hoverText"
                  icon={<RotateLeftIcon />}
                  type="reset"
                  handler={handleReset}
                />
              </Box>
            </FormControlLayout>
          )}
        </Formik>
      </BottomTopMotion>

      {/* UPDATE PASSWORD DETAILS FORM*/}
      <BottomTopMotion delayTime={0.1}>
        <Formik
          onSubmit={handlePasswordUpdate}
          initialValues={passwordInitialValues}
          validationSchema={updatePasswordSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            handleReset,
          }) => (
            <FormControlLayout onSubmit={handleSubmit}>
              <Typography
                variant="h5"
                sx={{
                  gridColumn: "span 2",
                  color: "text.main",
                  fontWeight: 600,
                }}
              >
                Update Password Details
              </Typography>
              <TextField
                fullWidth
                variant="filled"
                type={showPassword ? "text" : "password"}
                label="Current Password *"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.currentpassword}
                name="currentpassword"
                error={!!touched.currentpassword && !!errors.currentpassword}
                helperText={touched.currentpassword && errors.currentpassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type={showPassword ? "text" : "password"}
                label="New Password *"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.newpassword}
                name="newpassword"
                error={!!touched.newpassword && !!errors.newpassword}
                helperText={touched.newpassword && errors.newpassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type={showPassword ? "text" : "password"}
                label="Confirm Password *"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmnewpassword}
                name="confirmnewpassword"
                error={
                  !!touched.confirmnewpassword && !!errors.confirmnewpassword
                }
                helperText={
                  touched.confirmnewpassword && errors.confirmnewpassword
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  gridColumn: "span 2",
                  display: "flex",
                  justifyContent: "space-around",
                  "> button": {
                    "@media (max-width:412px)": {
                      transform: "scale(0.8)",
                      ":hover": {
                        transform: "scale(0.85)",
                      },
                    },
                  },
                }}
              >
                <BasicButton
                  title="Update"
                  color="none"
                  textColor="button.text"
                  hoverColor="button.dark"
                  hoverTextColor="button.hoverText"
                  icon={<DoneAllOutlinedIcon />}
                  type="submit"
                  handler={handleSubmit}
                />

                <BasicButton
                  title="Reset"
                  color="none"
                  textColor="button.text"
                  hoverColor="button.dark"
                  hoverTextColor="button.hoverText"
                  icon={<RotateLeftIcon />}
                  type="reset"
                  handler={handleReset}
                />
              </Box>
            </FormControlLayout>
          )}
        </Formik>
      </BottomTopMotion>
    </BasicLayout>
  );
};
