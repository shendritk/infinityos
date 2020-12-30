import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "60vw",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5f6fa",
    borderRadius: "2px",
    position: "absolute",
    zIndex: 20,

    [sizes.down("medium")]: {
      width: "70vw",
    },

    [sizes.down("small")]: {
      height: "50vh",
    },

    [sizes.down("xsmall")]: {
      width: "90vw",
    },

    [sizes.down("xxsmall")]: {
      height: "85vh",
    },
  },
  header: {
    backgroundColor: "rgba(0,0,0, 1)",
    width: "100%",
    height: "6%",
    color: "#f5f6fa",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.5rem",
  },
  header__search: {
    fontSize: "2.5rem",
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover": {
      color: "#ecf0f1",
    },
  },
  header__tab: {
    margin: "0rem 1.5rem",
    cursor: "pointer",
    height: "100%",
    transition: "all 0.4s ease-in-out",
    borderBottom: "2px solid rgba(0,0,0,0)",

    "&:hover": {
      color: "#ecf0f1",
      borderBottom: "2px solid #0984e3",
    },
  },
  header__icons: {
    "& svg": {
      cursor: "pointer",
      fontSize: "2rem",
      margin: "0rem 0.5rem",
      "&:hover": {
        color: "#ecf0f1",
      },
    },
    "& svg:last-child": {
      color: "#ff6b81",
      "&:hover": {
        color: "#e55039",
      },
    },
  },
  main: {
    width: "100%",
    height: "98%",
  },
  main__top: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #ecf0f1",

    "& a": {
      textDecoration: "none",
      color: "#2d3436",
    },
    "& span": {
      fontSize: "2rem",
      marginRight: "2rem",
      "&:hover": {
        color: "#303952",
      },
    },
    "& img": {
      width: "10rem",
    },
  },
  main__bottom: {
    height: "90%",
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  main__bottomRow: {
    height: "30%",
    display: "flex",
    flexDirection: "column",
    "& > span": {
      margin: "1rem",
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#2d3436",
    },
  },
  main_bottomRowContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0rem 1rem",
    height: "100%",

    [sizes.down("medium")]: {
      textAlign: "center",
    },

    [sizes.down("small")]: {
      flexWrap: "wrap",
    },

    [sizes.down("xxsmall")]: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 20%)",
    },
  },
});
