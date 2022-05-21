import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteStock } from "../../../actions/stocks";

import useStyles from "./styles";

const Stock = ({ stock, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let PRFormat = classes.overlay2;

  const profit = stock.currentPrice - stock.purchasePrice;
  const profitRatio = profit / stock.purchasePrice;
  let isGreen = Boolean(profitRatio > 0);

  if (isGreen) {
    PRFormat = classes.overlay2;
  } else {
    PRFormat = classes.overlay3;
  }

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography align="left" variant="h5">
          {stock.ticker}
        </Typography>
      </div>

      <div className={PRFormat}>
        <Typography align="left" variant="h6">
          ${stock.currentPrice} Δ: {profitRatio * 100}%
        </Typography>
      </div>

      <div className={classes.overlay}>
        <Typography variant="body2">
          Purchased: ({stock.quantity}) shares{" "}
          {moment(stock.dataCreated).fromNow()} @ ${""}
          {stock.purchasePrice} per share
        </Typography>
      </div>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteStock(stock._id))}
        >
          <DeleteIcon fontSize="small" /> Sell
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => setCurrentId(stock._id)}
        >
          <EditIcon fontSize="small" /> Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Stock;
