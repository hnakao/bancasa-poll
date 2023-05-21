import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import SurveyTable from "../components/SurveyTable";
import Copyright from "../components/Copyrights";
import { fetchSurveysAction, selectSurveys } from "../reducers/survey-slice";
import WishHouseChart from "../components/charts/wishHouseChart";
import BuyAmountChart from "../components/charts/buyAmountChart";
import StartAmountChart from "../components/charts/startAmountChart";
import MonthAmountChart from "../components/charts/monthAmountChart";
import WorkType from "../components/charts/workType";
import HouseType from "../components/charts/houseType";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 300,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const surveys = useSelector(selectSurveys);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    dispatch(fetchSurveysAction());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper}>
                <WishHouseChart surveys={surveys} />
              </Paper>
            </Grid>
            {/* Total polls */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <TotalSurveys />
              </Paper>
            </Grid> */}
            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper}>
                <BuyAmountChart surveys={surveys} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper}>
                <StartAmountChart surveys={surveys} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper}>
                <MonthAmountChart surveys={surveys} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper}>
                <WorkType surveys={surveys} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper}>
                <HouseType surveys={surveys} />
              </Paper>
            </Grid>
            {/* Polls table */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <SurveyTable />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
