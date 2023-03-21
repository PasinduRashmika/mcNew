import { Box, TextField, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import * as yup from "yup";
import { Formik } from "formik";
import { BasicButton } from "../../components/Button/BasicButton";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PieChart } from "../../components/PieChart/PieChart";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { FormControlLayout } from "../../components/layout/FormControlLayout";
import dayjs from "dayjs";
import { BottomTopMotion } from "../../components/Motion/BottomTopMotion";
import { TopBottomMotion } from "../../components/Motion/TopBottomMotion";
export const DailyCount = () => {
  //handling submit
  const handleFormSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  const initialValues = {
    visitDate: "",
  };

  /* if in schema exists not requiring field submiting not working */
  const userSchema = yup.object().shape({
    visitDate: yup.string().required("Date is required"),
  });

  return (
    <BasicLayout>
      <PageHeader
        title="Daily Count"
        subtitle="Daily status report of the patients"
      />
      <TopBottomMotion delayTime={0.1}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            errors,
            handleSubmit,
            touched,
            handleBlur,
            setFieldValue,
            values,
            setFieldTouched,
          }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControlLayout onSubmit={handleSubmit}>
                <DatePicker
                  label="Visited Date"
                  inputFormat="DD/MM/YYYY"
                  value={dayjs(values?.visitDate).format("DD-MM-YYYY") || ""}
                  onChange={(newValue) => {
                    setFieldValue(
                      "visitDate",
                      dayjs(newValue).format("DD-MM-YYYY")
                    );
                    setFieldTouched("visitDate", true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      sx={{
                        width: "100%",
                      }}
                      {...params}
                      name="visitDate"
                      onBlur={handleBlur}
                      error={errors.visitDate && touched.visitDate}
                    />
                  )}
                />
                <TextField
                  variant="standard"
                  focused
                  label="Number of Patients"
                  placeholder="0"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    readOnly: true,
                  }}
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
                />
              </FormControlLayout>
            </LocalizationProvider>
          )}
        </Formik>
      </TopBottomMotion>
      <BottomTopMotion delayTime={0.1}>
        <Box
          sx={{
            border: "1px solid #339BFF",
            padding: "1.05rem 2rem 2rem 2rem",
            borderRadius: "10px",
            height: "40vh",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              gridColumn: "span 2",
              color: "text.main",
              fontWeight: 600,
              borderBottom: "1px solid #339BFF",
              width: "300px",
            }}
          >
            Daily Patients according to faculty
          </Typography>
          <PieChart />
        </Box>
      </BottomTopMotion>
    </BasicLayout>
  );
};
