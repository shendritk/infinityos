import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "13%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    border: "1px solid #b2bec3",
    borderRadius: "3px",
    boxShadow: "0px 0.7px #b2bec3",

    [sizes.down("large")]: {
      height: "80%",
    },

    [sizes.down("small")]: {
      height: "90%",
    },

    [sizes.down("xxsmall")]: {
      width: "100%",
      height: "80%",
      padding: "0.5rem",
    },
  },

  icon: {
    width: "45%",
    height: "auto",
    marginBottom: "0.8rem",
    paddingTop: "1.2rem",

    [sizes.down("small")]: {
      width: "40%",
      marginBottom: "0rem",
    },
  },
  name: {
    fontSize: "1.4rem",
    fontWeight: "500",
    color: "#2d3436",
    marginBottom: "0.4rem",

    [sizes.down("small")]: {
      fontSize: "1.2rem",
      marginBottom: "0rem",
    },
  },
  rating: {
    marginBottom: "1rem",
    color: "#2d3436",
  },
  rating__lowScreenSize: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      color: "#f39c12",
    },

    [sizes.down("xxsmall")]: {
      marginBottom: "1.5rem",
    },
  },
});
