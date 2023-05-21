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

export default function Payment({ handleChange, values }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Hasta qué valor podrías pagar por la compra de una casa incluido
        terreno?
      </Typography>
      <div className={classes.section1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="house-value-options"
                name="buyAmountToPay"
                value={values.buyAmountToPay}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="20000"
                  control={<Radio />}
                  label="Hasta $ 20.000"
                />
                <FormControlLabel
                  value="20001"
                  control={<Radio />}
                  label="De $ 20.001 a $ 30.000"
                />
                <FormControlLabel
                  value="30001"
                  control={<Radio />}
                  label="De $ 30.001 a $ 40.000"
                />
                <FormControlLabel
                  value="40001"
                  control={<Radio />}
                  label="De $ 40.000 en adelante"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Divider variant="middle" />
        </Grid>
      </div>

      <Typography variant="h6" gutterBottom>
        Hasta cuánto podrías pagar por la entrada de una vivienda propia?
      </Typography>
      <div className={classes.section1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="house-entry-options"
                name="startAmountToPay"
                value={values.startAmountToPay}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="3000"
                  control={<Radio />}
                  label="Hasta $ 3.000"
                />
                <FormControlLabel
                  value="3001"
                  control={<Radio />}
                  label="De $ 3.001 a $ 4.000"
                />
                <FormControlLabel
                  value="5000"
                  control={<Radio />}
                  label="De $ 5.000 en adelante"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Divider variant="middle" />
        </Grid>
      </div>

      <Typography variant="h6" gutterBottom>
        Hasta cuánto puedes pagar al mes por una vivienda propia?
      </Typography>
      <div className={classes.section1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="house-month-options"
                name="monthAmountToPay"
                value={values.monthAmountToPay}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="150"
                  control={<Radio />}
                  label="Desde $ 150 a $ 200 al mes"
                />
                <FormControlLabel
                  value="201"
                  control={<Radio />}
                  label="Desde $ 201 a $ 250 al mes"
                />
                <FormControlLabel
                  value="251"
                  control={<Radio />}
                  label="Desde $ 251 a $ 300 al mes"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Divider variant="middle" />
        </Grid>
      </div>
    </React.Fragment>
  );
}
