import React from "react";
import Survey from "../components/survey/Survey";
import HomeIcon from "../assets/HomeIcon";
import promoImg from "../assets/promo.jpeg";
import { AppBar, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  image: {
    backgroundImage: `url(${"../assets/img1.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
    width: "700px",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "60%",
    // [theme.breakpoints.between(250, 450)]: {
    //   width: "60%"
    // },
    [theme.breakpoints.down(1329)]: {
      width: "40%",
    },
    [theme.breakpoints.down(600)]: {
      width: "60%",
    },
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Iberconsa
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.heroContent}>
        <Grid container justify="center" spacing={5}>
          <Grid item>
            <img className={classes.img} alt="complex" src={promoImg} />
          </Grid>
          <Grid item>
            <Survey />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
