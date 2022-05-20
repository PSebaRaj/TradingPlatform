import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getStocks } from "./actions/stocks";

import Form from "./components/Form/Form";
import Stocks from "./components/Stocks/Stocks";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          PS Ameritrade
        </Typography>
      </AppBar>

      <Grow in>
        <Container maxWidth="lg">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            {/* have form here */}
            <Grid item xs={12} sm={6}>
              <Stocks />
            </Grid>
            {/* have portfolio display here */}
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
