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

import useStyles from "./styles";

const Stock = ({ stock }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography align="left" variant="h5">
          {stock.ticker}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Typography align="left" variant="h6">
          Current Price: {stock.currentPrice}
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
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" /> Sell
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <EditIcon fontSize="small" /> Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Stock;
