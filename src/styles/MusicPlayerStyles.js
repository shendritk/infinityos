import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "50vw",
    height: "70vh",
    backgroundColor: "#2f3640",
    display: "flex",
    position: "absolute",
    zIndex: 10,

    [sizes.down("large")]: {
      width: "60vw",
      height: "50vh",
    },

    [sizes.down("small")]: {
      width: "80vw",
      height: "50vh",
    },

    [sizes.down("xxsmall")]: {
      width: "90vw",
      height: "60vh",
    },
  },
  left: {
    width: "20%",
    height: "100%",
    paddingTop: "3%",
    color: "white",
    fontWeight: "300",
    display: "flex",
    flexDirection: "column",

    [sizes.down("xxsmall")]: {
      width: "30%",
    },
  },
  search: {
    display: "flex",
    padding: "0rem 1rem",
    "& svg": {
      fontSize: "2rem",
      marginLeft: "0.5rem",
    },
    "& input": {
      width: "85%",
      outline: "none",
      color: "white",
      backgroundColor: "transparent",
      border: "1px solid gray",
      paddingLeft: "1rem",
      borderRadius: "2px",
      fontSize: "1rem",
    },
  },
  categories: {
    marginTop: "2rem",
    "& div": {
      fontSize: "1.5rem",
      marginTop: "0rem",
    },
    "& span": {
      color: "blue",
      fontWeight: "bold",
    },
  },
  categories__item: {
    padding: "0.5rem 1rem",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  right: {
    backgroundColor: "white",
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
  },
  header: {
    height: "4%",
    padding: "1rem",
    width: "100%",
    backgroundColor: "#2f3640",
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "1.3rem",
    "& span": {
      flex: "1",
      textAlign: "center",
    },
  },
});
