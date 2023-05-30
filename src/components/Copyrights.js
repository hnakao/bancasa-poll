import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Iberconsa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
