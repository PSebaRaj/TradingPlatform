import React from "react";
import { Typography, Grid, CircularProgress } from "@material-ui/core";
import Stock from "./Stock/Stock";

import { useSelector } from "react-redux";
import useStyles from "./styles";

const Stocks = ({ setCurrentId }) => {
  const classes = useStyles();
  const stocks = useSelector((state) => state.stocks);

  // console.log(stocks);
  //   <>
  //   <h1>Current Portfolio</h1>
  //   <Stock />
  //   <Stock />
  // </>

  return !stocks.length ? (
    <CircularProgress />
  ) : (
    <div>
      <Typography variant="h4" className={classes.heading}>
        Current Portfolio:
      </Typography>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {stocks.map((stock) => (
          <Grid item xs={12} sm={12} md={12} lg={12} key={stock._id}>
            <Stock stock={stock} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Stocks;
