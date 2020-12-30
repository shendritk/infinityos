import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "18%",
    backgroundColor: "#f5f6fa",
    opacity: "0.9",
    fontSize: "1.4rem",
    padding: "1rem",
    borderRadius: "3px",
    position: "absolute",
    color: "#2d3436",
    top: "4%",
    right: "1%",
    display: "flex",
    flexDirection: "column",

    [sizes.down("small")]: {
      width: "22%",
    },

    [sizes.down("xsmall")]: {
      width: "40%",
    },
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.2rem",
    marginTop: "1rem",
    "& img": {
      width: "5rem",
      height: "5rem",
      marginRight: "1rem",
    },
    "& div:first-child": {
      fontWeight: "bold",
    },
  },
  controls: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  progressBar: {
    width: "100%",
    backgroundColor: "red",
    height: "3px",
    margin: "0rem 0.5rem",
  },
});
