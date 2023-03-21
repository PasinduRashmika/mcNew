import {
  Box,
  TextField,
  Checkbox,
  Typography,
  useMediaQuery,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageSubHeader from "../../components/PageSubHeader/PageSubHeader";
import * as yup from "yup";
import { Formik } from "formik";
import { BasicButton } from "../../components/Button/BasicButton";
import SearchIcon from "@mui/icons-material/Search";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { FormControlLayout } from "../../components/layout/FormControlLayout";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import Radio from "@mui/material/Radio";

export const SearchDrugs = () => {
  //handling search
  const handleFormSearch = async (values) => {
    console.log(values);
    await new Promise((r) => setTimeout(r, 500));
  };

  //handling submit
  const handleFormSubmit = async (values) => {
    console.log(values);
    await new Promise((r) => setTimeout(r, 500));
  };

  //handling submit
  const handleFormSubmitTwo = async (values) => {
    console.log(values);
    await new Promise((r) => setTimeout(r, 500));
  };

  const initialValues = {};

  const userSchema = yup.object().shape({
    // visitDate: yup.date().required(),
  });

  return (
    <BasicLayout>
      <PageHeader title="Student Drugs" subtitle="Search Drugs" />
      <Formik
        onSubmit={handleFormSearch}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          errors,
          handleChange,
          handleSubmit,
          touched,
          handleBlur,
          setFieldValue,
          values,
        }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControlLayout onSubmit={handleFormSubmit}>
              <TextField
                focused
                label="Reg NO"
                placeholder="xx-xxxx-xxxxx"
                // InputLabelProps={{ shrink: true }}
                // value="1"
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
                style={{
                  marginTop: "0",
                }}
              />
              {/* </FormControlLayout>

            <FormControlLayout onSubmit={handleFormSubmitTwo}> */}
              <PageSubHeader subtitle="Drugs" />
            </FormControlLayout>
          </LocalizationProvider>
        )}
      </Formik>
    </BasicLayout>
  );
};
