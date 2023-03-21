import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  useTheme,
} from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Autocomplete from "react-google-autocomplete";
import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { BasicButton } from "../../components/Button/BasicButton";
import { DoneAllOutlined, RotateLeftOutlined } from "@mui/icons-material";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { FormControlLayout } from "../../components/layout/FormControlLayout";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";

export const ManageUsers = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  //handling submit
  const handleFormSubmit = async (values) => {
    console.log(values);
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  const initialValues = {
    title: "",
    fullName: "",
    email: "",
    position: "",
    mobile: "",
    location: "",
    status: "",
    password: "",
    confirmpassword: "",
  };

  //for validation checkup schema for User form
  const userSchema = yup.object().shape({
    title: yup.string().required("required field"),
    fullName: yup.string().required("required field"),
    email: yup.string().email().required("required field"),
    position: yup.string().required("required field"),
    location: yup.string().required("required field"),
    mobile: yup
      .string()
      .length(10, "Must contains 10 digit")
      .required("Mobile Number is Required"),
    status: yup.string().required("required field"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
    confirmpassword: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required")
      .oneOf([yup.ref("password")], "Your password do not match."),
  });

  return (
    <BasicLayout>
      <PageHeader title="Manage Users" subtitle="Add/Remove Users" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
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
              label="Full Name *"
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
              label="Position"
              name="position"
              value={values.position}
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
            <TextField
              select
              variant="filled"
              label="Status"
              name="status"
              value={values.status}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.status && !!errors.status}
              helperText={touched.status && errors.status}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="deactive">Deactive</MenuItem>
            </TextField>
            <TextField
              fullWidth
              variant="filled"
              type={showPassword ? "text" : "password"}
              label="Password *"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={!!touched.password && !!errors.password}
              helperText={touched.password && errors.password}
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
              value={values.confirmpassword}
              name="confirmpassword"
              error={!!touched.confirmpassword && !!errors.confirmpassword}
              helperText={touched.confirmpassword && errors.confirmpassword}
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
            />{" "}
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
                title="Submit"
                color="none"
                textColor="button.text"
                hoverColor="button.dark"
                hoverTextColor="button.hoverText"
                icon={<DoneAllOutlined />}
                type="submit"
                handler={handleSubmit}
              />

              <BasicButton
                title="Reset"
                color="none"
                textColor="button.text"
                hoverColor="button.dark"
                hoverTextColor="button.hoverText"
                icon={<RotateLeftOutlined />}
                type="reset"
                handler={handleReset}
              />
            </Box>
          </FormControlLayout>
        )}
      </Formik>
    </BasicLayout>
  );
};
