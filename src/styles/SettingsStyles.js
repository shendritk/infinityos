import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "17vw",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    top: "4%",
    right: "1%",
    borderRadius: "3px",
    padding: "1rem 0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",

    "& span": {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
    },

    [sizes.down("medium")]: {
      width: "20vw",
    },

    [sizes.down("xsmall")]: {
      width: "40vw",
    },

    [sizes.down("xxsmall")]: {
      width: "50vw",
    },
  },
  image: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "80%",
      height: "auto",
      border: "1px solid #f8f8f8",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
    },
    "& svg": {
      width: "10%",
      fontSize: "3rem",
      color: "#2d3436",
    },
  },
});
