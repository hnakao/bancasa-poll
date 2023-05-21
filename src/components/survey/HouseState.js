import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function HouseState({ handleChange, values }) {
  const classes = useStyles();

  const wishOwnHouse =
    values.houseType !== "own" ? (
      <>
        <Typography variant="h6" gutterBottom>
          Desearía tener casa propia?
        </Typography>
        <div className={classes.section1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="house-options"
                  name="wishOwnHouse"
                  value={values.wishOwnHouse}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Si" control={<Radio />} label="Si" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Divider variant="middle" />
          </Grid>
        </div>
      </>
    ) : null;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Qué tipo de vivienda tiene?
      </Typography>
      <div className={classes.section1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="house-type-options"
                name="houseType"
                value={values.houseType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="own"
                  control={<Radio />}
                  label="Propia"
                />
                <FormControlLabel
                  value="rent"
                  control={<Radio />}
                  label="Alquilada"
                />
                <FormControlLabel
                  value="family"
                  control={<Radio />}
                  label="Familiar"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Divider variant="middle" />
        </Grid>
      </div>
      {wishOwnHouse}
    </React.Fragment>
  );
}
