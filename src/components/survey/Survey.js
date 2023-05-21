import {
  Button,
  CircularProgress,
  CssBaseline,
  Paper,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSurveyAction,
  updateWishContactAction,
} from "../../reducers/survey-slice";
import Copyright from "../Copyrights";
import HouseState from "./HouseState";
import Payment from "./Payment";
import PersonalInfo from "./PersonalInfo";
import Share from "./Share";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Survey() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [surveyId, setSurveyId] = useState(null);

  const initialValues = {
    name: "",
    gender: "M",
    job: "private",
    houseType: "own",
    wishOwnHouse: "",
    buyAmountToPay: 0,
    startAmountToPay: 0,
    monthAmountToPay: 0,
    wishContact: "No",
    phone: "",
    phoneError: false,
    nameError: false,
  };
  const steps = ["Datos personales", "Casa propia", "Disponibilidad de pagos"];

  const [values, setValues] = useState(initialValues);
  const [disabled, setDisabled] = useState(true);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClick = () => {
    if (activeStep < steps.length - 1) {
      handleNext();
    } else if (activeStep === steps.length - 1) {
      dispatch(
        addSurveyAction(values, (response) => {
          const { id } = response;
          setSurveyId(id);
        })
      );
      handleNext();
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (name === "wishContact" && surveyId) {
      dispatch(updateWishContactAction(surveyId, { wishContact: value }));
    }

    const castValue = !isNaN(value) ? Number(value) : value;
    handleInputValues(name, castValue);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    handleInputValues(name, value);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            handleChange={handleInputChange}
            handleBlur={handleBlur}
            values={values}
          />
        );
      case 1:
        return <HouseState handleChange={handleInputChange} values={values} />;
      case 2:
        return <Payment handleChange={handleInputChange} values={values} />;
      // case 3:
      //   return <ContactInfo handleChange={handleInputChange} values={values} />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              surveyId ? (
                <Share
                  surveyId={surveyId}
                  handleChange={handleInputChange}
                  values={values}
                />
              ) : (
                <CircularProgress />
              )
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Anterior
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className={classes.button}
                    disabled={disabled}
                  >
                    {activeStep === steps.length - 1
                      ? "Finalizar"
                      : "Siguiente"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );

  function handleInputValues(name, value) {
    if (
      values.name.length > 1 &&
      values.phone.length >= 7 &&
      values.phone.length <= 9
    ) {
      setDisabled(false);
    }

    setValues({
      ...values,
      ...(name === "other" && { ...values, amountToPay: parseInt(value, 10) }),
      ...(name === "phone" &&
        (value.length < 8 || value.length > 10) && { phoneError: true }),
      ...(name === "name" && value.length === 0 && { nameError: true }),
      ...(name === "phone" &&
        value.length >= 8 &&
        value.length <= 10 && { phoneError: false }),
      ...(name === "name" && value.length !== 0 && { nameError: false }),
      [name]: value,
    });
  }
}
