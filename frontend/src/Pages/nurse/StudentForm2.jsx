import {
  FormControlLabel,
  MenuItem,
  TextField,
  FormGroup,
  Checkbox,
  FormLabel,
  Box,
} from "@mui/material";
import PageSubHeader from "../../components/PageSubHeader/PageSubHeader";

export const StudentForm2 = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  return (
    <>
      <PageSubHeader subtitle="Family History" />

      <FormLabel
        component="legend"
        sx={{
          gridColumn: "span 2",
        }}
      >
        Father&apos;s Details
      </FormLabel>
      <TextField
        select
        variant="filled"
        value={values.fatherisAlive}
        name="fatherisAlive"
        label="Is Father Alive"
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.fatherisAlive && !!errors.fatherisAlive}
        helperText={touched.fatherisAlive && errors.fatherisAlive}
      >
        <MenuItem value="alive">Alive</MenuItem>
        <MenuItem value="dead">Dead</MenuItem>
      </TextField>
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Occupation"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.fatherOccupation}
        name="fatherOccupation"
        error={!!touched.fatherOccupation && !!errors.fatherOccupation}
        helperText={touched.fatherOccupation && errors.fatherOccupation}
      />
      <FormLabel
        component="legend"
        sx={{
          gridColumn: "span 2",
        }}
      >
        Mother&apos;s Details
      </FormLabel>
      <TextField
        select
        variant="filled"
        label="Is Mother Alive"
        value={values.motherisAlive}
        onBlur={handleBlur}
        onChange={handleChange}
        name="motherisAlive"
        error={!!touched.motherisAlive && !!errors.motherisAlive}
        helperText={touched.motherisAlive && errors.motherisAlive}
      >
        <MenuItem value="alive">Alive</MenuItem>
        <MenuItem value="dead">Dead</MenuItem>
      </TextField>
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Occupation"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.motherOccupation}
        name="motherOccupation"
        error={!!touched.motherOccupation && !!errors.motherOccupation}
        helperText={touched.motherOccupation && errors.motherOccupation}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Siblings"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.siblings}
        name="siblings"
        error={!!touched.siblings && !!errors.siblings}
        helperText={touched.siblings && errors.siblings}
      />
      <br />
      <FormGroup>
        <FormLabel component="legend">Family History of</FormLabel>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <FormControlLabel
            control={<Checkbox checked={values.isTuberculosis} />}
            label="Tuberculosis"
            name="isTuberculosis"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={values.isAsthma} />}
            label="Asthma"
            name="isAsthma"
            onChange={handleChange}
          />

          <FormControlLabel
            control={<Checkbox checked={values.isNervousBreakdown} />}
            name="isNervousBreakdown"
            label="NervousBreakdown"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={values.isEpilepsy} />}
            name="isEpilepsy"
            label="Epilepsy"
            onChange={handleChange}
          />
        </Box>
      </FormGroup>
    </>
  );
};
