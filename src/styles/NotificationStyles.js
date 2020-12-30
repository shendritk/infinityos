import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "14%",
    position: "absolute",
    top: "4%",
    right: "1%",
    opacity: "0.9",
    diplay: "flex",
    flexDirection: "column",
    borderRadius: "3px",
    padding: "1rem",
    backgroundColor: "#f5f6fa",

    [sizes.down("large")]: {
      width: "20%",
    },

    [sizes.down("medium")]: {
      width: "25%",
    },

    [sizes.down("small")]: {
      width: "30%",
    },

    [sizes.down("xsmall")]: {
      width: "40%",
    },

    [sizes.down("xxsmall")]: {
      width: "60%",
    },

    "& span": {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#2d3436",
    },

    "& img": {
      width: "3rem",
      height: "3rem",
      marginRight: "1rem",
    },
  },
  github: {
    display: "flex",
    alignItems: "center",
    marginTop: "1.5rem",
    cursor: "pointer",
    "& span": {
      fontSize: "1.5rem",
      fontWeight: "400",
    },
    "& a": {
      textDecoration: "none",
      color: "#2d3436",
    },
  },
});
