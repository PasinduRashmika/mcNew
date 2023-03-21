import {
  FormControlLabel,
  MenuItem,
  TextField,
  FormGroup,
  Checkbox,
  Box,
  FormLabel,
} from "@mui/material";
import PageSubHeader from "../../components/PageSubHeader/PageSubHeader";
export const StudentForm3 = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  return (
    <>
      <PageSubHeader subtitle="Personal Details" />
      <br />
      <TextField
        select
        variant="filled"
        value={values.attempt}
        name="attempt"
        label="Attempt enter to the University"
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!touched.attempt && !!errors.attempt}
        helperText={touched.attempt && errors.attempt}
      >
        <MenuItem value="1st_Attempt">1st Attempt</MenuItem>
        <MenuItem value="2nd_Attempt">2nd Attempt</MenuItem>
        <MenuItem value="3rd_Attempt">3rd Attempt</MenuItem>
      </TextField>
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="School"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.school}
        name="school"
        error={!!touched.school && !!errors.school}
        helperText={touched.school && errors.school}
      />
      <TextField
        fullWidth
        variant="filled"
        type="number"
        label="Age of Leaving"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.ageOfLeaving}
        name="ageOfLeaving"
        error={!!touched.ageOfLeaving && !!errors.ageOfLeaving}
        helperText={touched.ageOfLeaving && errors.ageOfLeaving}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Any Awards in School"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.anyAwardsInSchool}
        name="anyAwardsInSchool"
        multiline
        rows={4}
        maxRows={6}
        error={!!touched.anyAwardsInSchool && !!errors.anyAwardsInSchool}
        helperText={touched.anyAwardsInSchool && errors.anyAwardsInSchool}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Games played in school"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.gamesPlayedInSchool}
        name="gamesPlayedInSchool"
        multiline
        rows={4}
        maxRows={6}
        error={!!touched.gamesPlayedInSchool && !!errors.gamesPlayedInSchool}
        helperText={touched.gamesPlayedInSchool && errors.gamesPlayedInSchool}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Games you like to play in the university "
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.universityGames}
        name="Games you like to play in the university"
        multiline
        rows={4}
        maxRows={6}
        error={!!touched.universityGames && !!errors.universityGames}
        helperText={touched.universityGames && errors.universityGames}
      />
      <FormGroup>
        <FormLabel component="legend">Habits</FormLabel>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <FormControlLabel
            control={<Checkbox checked={values.alcohol} />}
            label="Alcohol"
            name="alcohol"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={values.tobacco} />}
            label="Tobacco"
            name="tobacco"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={values.betalChewing} />}
            label="Betal Chewing"
            name="betalChewing"
            onChange={handleChange}
          />
        </Box>
      </FormGroup>
      <br />
    </>
  );
};
