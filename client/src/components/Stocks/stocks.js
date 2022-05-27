import React from "react";
import { Typography, Grid, CircularProgress, Button } from "@material-ui/core";
import Stock from "./Stock/Stock";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";

import { updateStock } from "../../actions/stocks";

const Stocks = ({ setCurrentId }) => {
  const classes = useStyles();
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  const updateStockPrices = () => {
    stocks.forEach((stock) => {
      axios
        .get(
          `https://psebaraj-stock-scraper.herokuapp.com/${stock.ticker}/price`,
          {
            responseType: "json",
          }
        )
        .then((response) => {
          console.log(response.data.price);
          var newStock = stock;
          newStock.currentPrice = response.data.price;
          dispatch(updateStock(stock._id, newStock));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return !stocks.length ? (
    <CircularProgress />
  ) : (
    <div>
      <Typography variant="h4" className={classes.heading}>
        Current Portfolio:
      </Typography>
      <Button
        className={classes.refreshPriceButton}
        variant="container"
        color="primary"
        size="medium"
        onClickCapture={updateStockPrices}
      >
        {" "}
        Refresh Current Prices{" "}
      </Button>
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
