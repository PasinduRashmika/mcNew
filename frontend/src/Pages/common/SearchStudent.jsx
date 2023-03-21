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
import axios from 'axios';
export const SearchStudent = () => {
  const theme = useTheme();

  const [name,setName]= useState('');
  const [regNo,setRegNo]= useState('');
  const [email,setEmail]= useState('');
  const [age,setAge]= useState('');
  const [dateOfBirth,setDateOfBirth]= useState('');
  const [faculty,setFaculty]= useState('');
  const [gender, setGender] = useState('');

  const [address,setAddress]= useState('');
  const [subjects,setSubjects]= useState('');
  const [motherOccupation,setMotherOccupation]= useState('');
  const [fatherOccupation,setFatherOccupation]= useState('');
  const [siblings,setSiblings]= useState('');
  const [income,setIncome]= useState('');
  const [school,setSchool]= useState('');
  const [ageOfLeaving,setAgeOfLeaving]= useState('');
  const [gamesPlayedInSchool,setGamesPlayedInSchool]= useState('');
  const [universityGames,setUniversityGames]= useState('');
  const [alcohol,setAlcohol]= useState('');
  const [tobacco,setTobacco]= useState('');
  const [betalChewing,setBetalChewing]= useState('');
  const [rice,setRice]= useState('');
  const [meat,setMeat]= useState('');
  const [vegetables,setVegetables]= useState('');
  const [fish,setFishs]= useState('');
  const [eggs,setEggs]= useState('');
  const [dryFish,setDryFish]= useState('');
  const [civilState,setCivilState]= useState('');
  const [fatherisAlive,setFatherisAlive]= useState('');
  const [motherisAlive,setMotherisAlive]= useState('');
  const [isTuberculosis,setIsTuberculosis]= useState('');
  const [isAsthma,setMoIsAsthma]= useState('');
  const [isEpilepsy,setIsEpilepsy]= useState('');
  const [isNervousBreakdown,setIsNervousBreakdown]= useState('');
  const [height,setHeight]= useState('');
  const [weight,setWeight]= useState('');
  const [chestExpansionInsp,setChestExpansionInsp]= useState('');
  const [chestExpansionExp,setChestExpansionExp]= useState('');
  const [visionL,setVisionL]= useState('');
  const [visionR,setVisionR]= useState('');
  const [teeth,setTeeth]= useState('');
  const [hearing,setHearing]= useState('');
  const [chestXRay,setChestXRay]= useState('');
  const [tuberculinThroat,setTuberculinThroatt]= useState('');
  const [tuberculinTesBP,setTuberculinTesBP]= useState('');
  const [vitaminDeficiencies,setVitaminDeficiencies]= useState('');
  const [heart,setHeart]= useState('');
  const [lungs,setLungs]= useState('');
  const [abdomen,setaAbdomen]= useState('');
  const [varicoseVeins,setVaricoseVeins]= useState('');
  const [centralNervous,setCentralNervous]= useState('');
  const [remarks,setRemarks]= useState('');



  



  const searchStudent = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    const oneOfStudent = await axios.post('http://localhost:3000/api/v1/students/getStudentByRegNo',values);
    console.log(oneOfStudent.data);
    setName(oneOfStudent.data.data.student.name);
    setRegNo(oneOfStudent.data.data.student.regNo);
    setEmail(oneOfStudent.data.data.student.email);
    setAge(oneOfStudent.data.data.student.age);
    setDateOfBirth(oneOfStudent.data.data.student.dateOfBirth);
    setFaculty(oneOfStudent.data.data.student.faculty);
    setGender(oneOfStudent.data.data.student.gender);
    setCivilState(oneOfStudent.data.data.student.civilState);
    setAddress(oneOfStudent.data.data.student.address);
    setSubjects(oneOfStudent.data.data.student.subjects);
    setMotherOccupation(oneOfStudent.data.data.student.motherOccupation);
    setFatherOccupation(oneOfStudent.data.data.student.fatherOccupation);
    setSiblings(oneOfStudent.data.data.student.siblings);
    setIncome(oneOfStudent.data.data.student.income);
    setSchool(oneOfStudent.data.data.student.school);
    setAgeOfLeaving(oneOfStudent.data.data.student.ageOfLeaving);
    setGamesPlayedInSchool(oneOfStudent.data.data.student.gamesPlayedInSchool);
    setUniversityGames(oneOfStudent.data.data.student.universityGames);
    setAlcohol(oneOfStudent.data.data.student.alcohol);
    setTobacco(oneOfStudent.data.data.student.tobacco);
    setBetalChewing(oneOfStudent.data.data.student.betalChewing);
    setRice(oneOfStudent.data.data.student.rice);
    setMeat(oneOfStudent.data.data.student.meat);
    setVegetables(oneOfStudent.data.data.student.vegetables);
    setFishs(oneOfStudent.data.data.student.fish);
    setEggs(oneOfStudent.data.data.student.eggs);
    setDryFish(oneOfStudent.data.data.student.dryFish);
    setFatherisAlive(oneOfStudent.data.data.student.fatherisAlive);
    setMotherisAlive(oneOfStudent.data.data.student.motherisAlive);
    setIsTuberculosis(oneOfStudent.data.data.student.isTuberculosis);
    setMoIsAsthma(oneOfStudent.data.data.student.isAsthma);
    setIsEpilepsy(oneOfStudent.data.data.student.isEpilepsy);
    setIsNervousBreakdown(oneOfStudent.data.data.student.isNervousBreakdown);
    setHeight(oneOfStudent.data.data.student.height);
    setWeight(oneOfStudent.data.data.student.weight);
    setChestExpansionInsp(oneOfStudent.data.data.student.chestExpansionInsp);
    setChestExpansionExp(oneOfStudent.data.data.student.chestExpansionExp);
    setVisionL(oneOfStudent.data.data.student.visionL);
    setVisionR(oneOfStudent.data.data.student.visionR);
    setTeeth(oneOfStudent.data.data.student.teeth);
    setHearing(oneOfStudent.data.data.student.hearing);
    setChestXRay(oneOfStudent.data.data.student.chestXRay);
    setTuberculinThroatt(oneOfStudent.data.data.student.tuberculinThroat);
    setTuberculinTesBP(oneOfStudent.data.data.student.tuberculinTesBP);
    setVitaminDeficiencies(oneOfStudent.data.data.student.vitaminDeficiencies);
    setHeart(oneOfStudent.data.data.student.heart);
    setLungs(oneOfStudent.data.data.student.lungs);
    setaAbdomen(oneOfStudent.data.data.student.abdomen);
    setVaricoseVeins(oneOfStudent.data.data.student.varicoseVeins);
    setCentralNervous(oneOfStudent.data.data.student.centralNervous);
    setRemarks(oneOfStudent.data.data.student.remarks);
  };
  const handlePasswordUpdate = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, 2, null));
  };

  const personalInitialValues = {

  };
  const studentSchema = yup.object().shape({
    regNo: yup
      .string()
      .matches(
        /[A-Z][A-Z]-\d\d\d\d-\d\d\d\d\d/i,
        "Must be in format XX-XXXX-XXXX"
      )
      .required("required field")
    
  });

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
      <PageHeader title="Search Student" subtitle="Students  Details" />
      <Formik
        onSubmit={searchStudent}
        initialValues={personalInitialValues}
        validationSchema={studentSchema}
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
              error={!!touched.regNo && !!errors.regNo}
              helperText={touched.regNo && errors.regNo}
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
              value={name}
              name={name}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Registration No"
              onBlur={handleBlur}
              onChange={handleChange}
              value={regNo}
              name={regNo}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={email}
              name={email}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Age"
              onBlur={handleBlur}
              onChange={handleChange}
              value={age}
              name={age}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Date of Birth"
              onBlur={handleBlur}
              onChange={handleChange}
              value={dateOfBirth}
              name={dateOfBirth}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Faculty"
              onBlur={handleBlur}
              onChange={handleChange}
              value={faculty}
              name={faculty}
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
                    checked={gender === "female"}
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    checked={gender === "male"}
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
                    checked={civilState === "married"}
                    control={<Radio />}
                    label="Married"
                  />
                  <FormControlLabel
                    value="single"
                    checked={civilState === "single"}
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
              value={address}
              name={address}
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
              value={subjects}
              name={subjects}
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
                  value={values.fatherisAlive}
                  sx={{
                    display: "flex",
                    gridColumn: "span 2",
                    justifyContent: "space-between",
                  }}
                  onChange={(event) => {
                    setFieldValue("fatherisAlive", event.currentTarget.value);
                  }}
                >
                  <FormControlLabel
                    value="alive"
                    checked={fatherisAlive === "alive"}
                    control={<Radio />}
                    label="Alive"
                  />
                  <FormControlLabel
                    value="dead"
                    checked={fatherisAlive === "dead"}
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
              value={motherOccupation}
              name={motherOccupation}
            />

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginLeft: "20px" }}>
                <FormLabel component="legend">Mother</FormLabel>
                <RadioGroup
                  row
                  name="mother"
                  value={values.motherisAlive}
                  sx={{
                    display: "flex",
                    gridColumn: "span 2",
                    justifyContent: "space-between",
                  }}
                  onChange={(event) => {
                    setFieldValue("motherisAlive", event.currentTarget.value);
                  }}
                >
                  <FormControlLabel
                    value="alive"
                    checked={motherisAlive === "alive"}
                    control={<Radio />}
                    label="Alive"
                  />
                  <FormControlLabel
                    value="dead"checked={motherisAlive === "dead"}
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
              value={fatherOccupation}
              name={fatherOccupation}
            />

            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Siblings"
              onBlur={handleBlur}
              onChange={handleChange}
              value={siblings}
              name={siblings}
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
              value={income}
              name={income}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginLeft: "20px" }}>
                <FormLabel component="legend">Family History Of</FormLabel>
                <RadioGroup
                  row
                  name="familyHistoryOf"
                  value={values.gender}
                  sx={{
                    display: "flex",
                    gridColumn: "span 2",
                    justifyContent: "space-between",
                  }}
                  onChange={(event) => {
                    setFieldValue("familyHistoryOf", event.currentTarget.value);
                  }}
                >
                  <FormControlLabel
                    value="isTuberculosis"
                    checked={isTuberculosis}
                    control={<Checkbox />}
                    label="Tuberculosis"
                  />
                  <FormControlLabel
                    value="isAsthma"
                    checked={isAsthma}
                    control={<Checkbox />}
                    label="Asthma"
                  />
                  <FormControlLabel
                    value="isEpilepsy"
                    checked={isEpilepsy}
                    control={<Checkbox />}
                    label="Epilepsy"
                  />
                  <FormControlLabel
                    value="isNervousBreakdown"
                    checked={isNervousBreakdown}
                    control={<Checkbox />}
                    label="Nervous Break Down"
                  />
                  <br />
                </RadioGroup>
              </Box>
            </Box>
            
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
              value={school}
              name={school}
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
              value={ageOfLeaving}
              name={ageOfLeaving}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Any Awards in School"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.anyAwardsInSchool}
              name="anyAwardsInSchool"
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
              value={gamesPlayedInSchool}
              name={gamesPlayedInSchool}
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
              value={universityGames}
              name={universityGames}
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
                    checked={alcohol}
                    control={<Checkbox />}
                    label="Alcohol"
                  />
                  <FormControlLabel
                    value="tobacco"
                    checked={tobacco}
                    control={<Checkbox />}
                    label="Tobacco"
                  />
                  <FormControlLabel
                    value="betelChewing"
                    checked={betalChewing}
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
                    checked={rice}
                    control={<Checkbox />}
                    label="Rice"
                  />
                  <FormControlLabel
                    value="vegetables"
                    checked={vegetables}
                    control={<Checkbox />}
                    label="Vegetables"
                  />
                  <FormControlLabel
                    value="meat"
                    checked={meat}
                    control={<Checkbox />}
                    label="Meat"
                  />
                  <FormControlLabel
                    value="fish"
                    checked={fish}
                    control={<Checkbox />}
                    label="Fish"
                  />
                  <FormControlLabel
                    value="egg"
                    checked={eggs}
                    control={<Checkbox />}
                    label="Egg"
                  />
                  <FormControlLabel
                    value="dryFish"
                    checked={dryFish}
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
              value={height}
              name={height}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Weight"
              onBlur={handleBlur}
              onChange={handleChange}
              value={weight}
              name={weight}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Chest Expansion Insp,"
              onBlur={handleBlur}
              onChange={handleChange}
              value={chestExpansionInsp}
              name={chestExpansionInsp}
              multiline
              maxRows={4}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Chest Expansion Exp,"
              onBlur={handleBlur}
              onChange={handleChange}
              value={chestExpansionExp}
              name={chestExpansionExp}
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
              value={visionL}
              name={visionL}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Vision(R)"
              onBlur={handleBlur}
              onChange={handleChange}
              value={visionR}
              name={visionR}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Hearing"
              onBlur={handleBlur}
              onChange={handleChange}
              value={hearing}
              name={hearing}
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
              value={teeth}
              name={teeth}
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
              value={chestXRay}
              name={chestXRay}
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
              value={tuberculinThroat}
              name={tuberculinThroat}
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
              value={tuberculinTesBP}
              name={tuberculinTesBP}
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
              value={vitaminDeficiencies}
              name={vitaminDeficiencies}
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
              value={heart}
              name={heart}
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
              value={lungs}
              name={lungs}
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
              value={abdomen}
              name={abdomen}
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
              value={varicoseVeins}
              name={varicoseVeins}
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
              value={centralNervous}
              name={centralNervous}
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
              value={remarks}
              name={remarks}
              multiline
              maxRows={4}
            />
            <br />

          </FormControlLayout>
        )}
      </Formik>
    </BasicLayout>
  );
};
