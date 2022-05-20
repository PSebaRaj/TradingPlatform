import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

import { createStock } from "../../actions/stocks";

const Form = () => {
  const classes = useStyles();
  const [stockData, setStockData] = useState({
    ticker: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createStock(stockData));
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Buy Shares:</Typography>
        <TextField
          name="ticker"
          variant="outlined"
          label="Stock Ticker"
          fullWidth
          value={stockData.ticker}
          onChange={(e) =>
            setStockData({ ...stockData, ticker: e.target.value })
          }
        />
        <TextField
          name="quantity"
          variant="outlined"
          label="Quantity"
          fullWidth
          value={stockData.quantity}
          onChange={(e) =>
            setStockData({ ...stockData, quantity: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="container"
          color="primary"
          size="medium"
          type="submit"
          fullWidth
        >
          Buy
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
