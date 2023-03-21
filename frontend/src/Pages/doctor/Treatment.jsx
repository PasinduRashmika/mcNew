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
// import { FormControlOneColumnLayout } from "../../components/layout/FormControlLayoutOneColumn";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";

export const Treatment = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  //handling submit
  const handlePersonalDetailsUpdate = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };
  const handlePasswordUpdate = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, 2, null));
  };
  const handleTreatment = async (values) => {
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
    age: "",
    diagnosis:"",
    treatments:"",
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

  return (
    <BasicLayout>
      <PageHeader title="Treatment" subtitle="Treatment for student" />
      <Formik
        onSubmit={handlePersonalDetailsUpdate}
        initialValues={personalInitialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,

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
          </FormControlLayout>
     
        
        )} 
      </Formik>
    </BasicLayout>
  );
};
