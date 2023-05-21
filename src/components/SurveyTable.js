import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Title from "./Title";
import { selectSurveys } from "../reducers/survey-slice";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function SurveyTable() {
  const classes = useStyles();
  const surveys = useSelector(selectSurveys);

  const getJob = (job) => {
    switch (job) {
      case "private":
        return "Privado";

      case "public":
        return "Público";

      case "freelancer":
        return "Autónomo";

      default:
        break;
    }
  };

  const getHouseType = (type) => {
    switch (type) {
      case "own":
        return "Propia";

      case "rent":
        return "Alquilada";

      case "family":
        return "Familiar";

      default:
        break;
    }
  };

  const getBuyAmount = (amount) => {
    switch (amount) {
      case 20000:
        return "Hasta $ 20.000";

      case 20001:
        return "De $ 20.001 a $ 30.000";

      case 30001:
        return "De $ 30.001 a $ 40.000";

      case 40001:
        return "De $ 40.000 en adelante";

      default:
        break;
    }
  };

  const getStartAmount = (amount) => {
    switch (amount) {
      case 3000:
        return "Hasta $ 3.000";

      case 3001:
        return "De $ 3.001 a $ 4.000";

      case 5000:
        return "De $ 5.000 en adelante";

      default:
        break;
    }
  };

  const getMonthAmount = (amount) => {
    switch (amount) {
      case 150:
        return "Desde $ 150 a $ 200 al mes";

      case 201:
        return "Desde $ 201 a $ 250 al mes";

      case 251:
        return "Desde $ 251 a $ 300 al mes";

      default:
        break;
    }
  };

  const getWishOwnHouse = (value) => (value ? "Si" : "No");

  return (
    <React.Fragment>
      <Title>Encuestas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Trabajo</TableCell>
            <TableCell>Tipo de vivienda</TableCell>
            <TableCell>Compra</TableCell>
            <TableCell>Entrada</TableCell>
            <TableCell>Mensual</TableCell>
            <TableCell>Quiere casa propia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {surveys.map((row) => (
            <TableRow key={row._id}>
              <TableCell>
                {moment(row.createdAt).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{getJob(row.job)}</TableCell>
              <TableCell>{getHouseType(row.houseType)}</TableCell>
              <TableCell>{getBuyAmount(row.buyAmountToPay)}</TableCell>
              <TableCell>{getStartAmount(row.startAmountToPay)}</TableCell>
              <TableCell>{getMonthAmount(row.monthAmountToPay)}</TableCell>
              <TableCell>{getWishOwnHouse(row.wishOwnHouse)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>Total: {surveys.length}</div>
    </React.Fragment>
  );
}
