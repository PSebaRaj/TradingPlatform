import React from "react";
import Stock from "./Stock/Stock";

import { useSelector } from "react-redux";
import useStyles from "./styles";

const Stocks = () => {
  const classes = useStyles();
  const stocks = useSelector((state) => state.stocks);

  console.log(stocks);

  return (
    <>
      <h1>Current Portfolio</h1>
      <Stock />
      <Stock />
    </>
  );
};

export default Stocks;
