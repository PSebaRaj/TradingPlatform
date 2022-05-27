import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  heading: {
    // position: "absolute",
    top: "20px",
    left: "50px",
    color: "white",
  },
  refreshPriceButton: {
    marginBottom: 10,
    backgroundColor: "white",
  },
}));
