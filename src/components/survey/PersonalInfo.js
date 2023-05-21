import {
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function PersonalInfo({ handleChange, handleBlur, values }) {
  const phoneHelperText = () =>
    values.phoneError ? "Número de teléfono inválido." : null;
  const nameHelperText = () => (values.nameError ? "Campo requerido" : null);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos Personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">
            Nombre y Apellidos:
          </Typography>
          <TextField
            id="outlined-full-width-name"
            label="Nombre Completo"
            name="name"
            style={{ margin: 8 }}
            placeholder="Ej: John Doe"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
            variant="outlined"
            error={values.nameError}
            helperText={nameHelperText()}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">
            Teléfono:
          </Typography>
          <TextField
            id="phone-number"
            label="Teléfono"
            style={{ margin: 8 }}
            InputLabelProps={{
              shrink: true,
            }}
            type="tel"
            variant="outlined"
            name="phone"
            required
            error={values.phoneError}
            helperText={phoneHelperText()}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+593</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">
            Sexo:
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender-options"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="M"
                control={<Radio />}
                label="Masculino"
              />
              <FormControlLabel
                value="F"
                control={<Radio />}
                label="Femenino"
              />
              <FormControlLabel value="O" control={<Radio />} label="Otro" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">
            Qué tipo de trabajo tiene?:
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="job-options"
              name="job"
              value={values.job}
              onChange={handleChange}
            >
              <FormControlLabel
                value="private"
                control={<Radio />}
                label="Empleado privado"
              />
              <FormControlLabel
                value="public"
                control={<Radio />}
                label="Empleado público"
              />
              <FormControlLabel
                value="freelancer"
                control={<Radio />}
                label="Autónomo"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12}>
            <TextField
              id="outlined-full-width-ci"
              label="Cédula"
              name="personalId"
              style={{ margin: 8 }}
              placeholder="Ej: 1713175071"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            variant="outlined"
            onChange={handleChange}
            />
          </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
