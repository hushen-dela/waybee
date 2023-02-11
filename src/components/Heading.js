import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ label }) => {
  return (
    <Typography fontSize={20} fontWeight={500}>
      {label}
    </Typography>
  );
};

export default Heading;
