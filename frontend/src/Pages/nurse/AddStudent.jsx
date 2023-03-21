import { Box } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import PageHeader from "../../components/PageHeader/PageHeader";
import { BasicButton } from "../../components/Button/BasicButton";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StudentForm1 } from "./StudentForm1";
import { StudentForm2 } from "./StudentForm2";
import { StudentForm3 } from "./StudentForm3";
import { useState } from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { FormControlLayout } from "../../components/layout/FormControlLayout";

export const AddStudent = () => {
  //page navigation state
  const [page, setPage] = useState({
    no: 1,
  });

  //form1 initial values
  const form1InitialValues = {
    title: "",
    fullName: "",
    dateOfBirth: "",
    address: "",
    email: "",
    faculty: "",
    gender: "male",
    martialStatus: "single",
    level: "",
    regNo: "",
  };

  //form2 initial values
  const form2InitialValues = {
    fatherisAlive: "",
    fatherOccupation: "",
    motherisAlive: "",
    motherOccupation: "",
    siblings: "",
    isTuberculosis: false,
    isAsthma: false,
    isNervousBreakdown: false,
    isEpilepsy: false,
  };

  //form3 initial values
  const form3InitialValues = {
    attempt: "",
    school: "",
    ageOfLeaving: "",
    anyAwardsInSchool: "",
    gamesPlayedInSchool: "",
    universityGames: "",
    alcohol: false,
    tobacco: false,
    betalChewing: false,
  };

  const handleFormSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(values);
    alert(JSON.stringify(values));
  };

  //for validation checkup schema for student form
  const studentSchema = yup.object().shape({
    title: yup.string().required("required field"),
    fullName: yup.string().required("required field"),
    dateOfBirth: yup.string().required("required field"),
    address: yup.string().required("required Field"),
    email: yup.string().email("Invalid Email").required("required filed"),
    martialStatus: yup.string().required("required field"),
    gender: yup.string().required("required field"),
    faculty: yup.string().required("required field"),
    level: yup.string().required("required field"),
    regNo: yup
      .string()
      .matches(
        /[A-Z][A-Z]\/\d\d\d\d\/\d\d\d\d\d/i,
        "Must be in format XX/XXXX/XXXX"
      )
      .required("required field"),
    fatherisAlive: yup.string().required("required field"),
    fatherOccupation: yup.string(),
    motherisAlive: yup.string().required("required field"),
    motherOccupation: yup.string(),
    siblings: yup.string(),
    isTuberculosis: yup.boolean(),
    isAsthma: yup.boolean(),
    isNervousBreakdown: yup.boolean(),
    isEpilepsy: yup.boolean(),
    attempt: yup.string().required("required field"),
    school: yup.string().required("required field"),
    ageOfLeaving: yup
      .number()
      .integer("Age must be a whole number")
      .required("required field")
      .typeError("Enter a valid number") /* Error message */
      .min(1, "age must be atleast 1")
      .max(30, "age must be less than 30")
      .required("required field"),
    anyAwardsInSchool: yup.string(),
    gamesPlayedInSchool: yup.string(),
    universityGames: yup.string(),
    alcohol: yup.boolean(),
    tobacco: yup.boolean(),
    betalChewing: yup.boolean(),
  });

  return (
    <BasicLayout>
      <PageHeader title="Student Form" subtitle="Add student details" />

      <Formik
        onSubmit={handleFormSubmit}
        /* passing initial values for the form so the select , radio button default selection can set */
        initialValues={{
          ...form1InitialValues,
          ...form2InitialValues,
          ...form3InitialValues,
        }}
        validationSchema={studentSchema}
      >
        {/* arrow function is to use to create the form */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          handleReset,
        }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControlLayout onSubmit={handleSubmit}>
              {page.no === 1 && (
                <StudentForm1
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  // formHandler={form1Handler}
                />
              )}
              {page.no === 2 && (
                <StudentForm2
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  // formHandler={form2Handler}
                />
              )}
              {page.no === 3 && (
                <StudentForm3
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  // formHandler={form3Handler}
                />
              )}
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
                {[2, 3].includes(page.no) && (
                  <BasicButton
                    title="Previous"
                    color="none"
                    textColor="button.text"
                    hoverColor="button.dark"
                    hoverTextColor="button.hoverText"
                    icon={<ArrowBackOutlinedIcon />}
                    handler={(prev) => {
                      setPage({
                        ...prev,
                        no: page.no - 1,
                      });
                    }}
                  />
                )}

                {[1, 2].includes(page.no) && (
                  <BasicButton
                    title="Next"
                    color="none"
                    textColor="button.text"
                    hoverColor="button.dark"
                    hoverTextColor="button.hoverText"
                    icon={<ArrowForwardOutlinedIcon />}
                    handler={(prev) => {
                      setPage({
                        ...prev,
                        no: page.no + 1,
                      });
                    }}
                  />
                )}

                {page.no === 3 && (
                  <BasicButton
                    title="Submit"
                    color="none"
                    textColor="button.text"
                    hoverColor="button.dark"
                    hoverTextColor="button.hoverText"
                    icon={<DoneAllOutlinedIcon />}
                    type="submit"
                    handler={handleSubmit}
                  />
                )}
                <BasicButton
                  title="Reset"
                  color="none"
                  textColor="button.text"
                  hoverColor="button.dark"
                  hoverTextColor="button.hoverText"
                  icon={<RotateLeftIcon />}
                  type="button"
                  handler={handleReset}
                />
              </Box>
            </FormControlLayout>
          </LocalizationProvider>
        )}
      </Formik>
    </BasicLayout>
  );
};
