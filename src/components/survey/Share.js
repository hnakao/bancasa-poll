import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../hooks/debounce";
import SocialMediaButtons from "../SocialMediaButtons";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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

export default function Share({ surveyId, handleChange, values }) {
  console.log("🚀 ~ Share ~ surveyId:", surveyId);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const phone = useDebounce(phoneNumber, 2000);

  // Effect for API call
  // useEffect(
  //   () => {
  //     if (phone) {
  //       const phoneDto = {
  //         name: values.name,
  //         phone,
  //       }
  //       dispatch(
  //         updatePhoneAction(phoneDto, (error, data) => {
  //           if (error) {
  //             console.log("🚀 -> dispatch -> error", error);
  //           } else {
  //             console.log("🚀 -> Phone Updated");
  //           }
  //         })
  //       );
  //     }
  //   },
  //   [phone]
  // );

  const phoneContent =
    values.wishContact === "Si" ? (
      <>
        <Typography variant="h6" gutterBottom>
          Déjanos tu número de teléfono para enviarte información.
        </Typography>
        <div className={classes.section1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="phone-number"
                label="Phone"
                InputLabelProps={{
                  shrink: true,
                }}
                type="number"
                variant="outlined"
                name="phone"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Divider variant="middle" />
          </Grid>
        </div>
      </>
    ) : null;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Desearías que te informen sobre un nuevo plan de vivienda?
      </Typography>
      <div className={classes.section1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="contact-options"
                name="wishContact"
                value={values.wishContact}
                onChange={handleChange}
              >
                <FormControlLabel value="No" control={<Radio />} label="No" />
                <FormControlLabel value="Si" control={<Radio />} label="Si" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Divider variant="middle" />
        </Grid>
      </div>
      {/* {phoneContent} */}

      <Typography variant="h6" gutterBottom>
        Gracias por dedicarnos su preciado tiempo {"\u2728"}
      </Typography>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography gutterBottom>
            Comparte para que tus amigos puedan participar!
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SocialMediaButtons
            url="https://bancasa-poll.netlify.app/"
            text="Participa en la encuesta de Bancasa"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
