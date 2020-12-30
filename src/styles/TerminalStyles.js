import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "50vw",
    height: "50vh",
    marginLeft: "2rem",
    marginTop: "2rem",
    borderRadius: "1% 1% 2px 2px",
    overflow: "hidden",
    position: "absolute",
    zIndex: 9999,

    [sizes.down("large")]: {
      width: "60vw",
      height: "40vh",
    },

    [sizes.down("medium")]: {
      width: "65vw",
    },

    [sizes.down("small")]: {
      width: "70vw",
      height: "35vh",
    },

    [sizes.down("xsmall")]: {
      width: "90vw",
      height: "45vh",
    },
  },
  header: {
    backgroundColor: "#3d3d3d",
    width: "100%",
    height: "7%",
    display: "flex",
    alignItems: "center",
    "& span": {
      flex: 1,
      textAlign: "center",
      color: "white",
      fontSize: "1.5rem",
      letterSpacing: "1px",
    },
    "& svg": {
      color: "white",
      fontSize: "2rem",
      marginRight: "1rem",
      borderRadius: "50%",
      "&:hover": {
        backgroundColor: "#c23616",
        color: "#dcdde1",
      },
    },
  },
  content: {
    width: "100%",
    height: "93%",
  },
  input: {
    paddingTop: "1rem",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "",
    letterSpacing: "1px",
    fontFamily: "Ubuntu",
    resize: "none",
    border: "none",
    outline: "none",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    width: "100%",
    height: "100%",
  },
});
