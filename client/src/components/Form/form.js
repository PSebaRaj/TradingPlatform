import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";

import { createStock, updateStock } from "../../actions/stocks";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const [stockData, setStockData] = useState({
    ticker: "",
    quantity: "",
  });
  const stock = useSelector((state) =>
    currentId ? state.stocks.find((s) => s._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (stock) {
      setStockData({ stock });
    }
  }, [stock]);

  const clear = () => {
    setCurrentId(null);
    setStockData({ ticker: "", quantity: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateStock(currentId, stockData));
    } else {
      dispatch(createStock(stockData));
    }

    clear();
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
