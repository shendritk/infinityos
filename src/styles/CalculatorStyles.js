import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "22vw",
    height: "60vh",
    backgroundColor: "rgba(255,255,255, 0.9)",
    fontFamily: `'Roboto', 'Ubuntu',sans-serif`,
    fontWeight: "300",
    color: "#d24c4b",
    border: "1px solid #8395a7",
    boxShadow: "1px 1px 10px #718093",
    cursor: "arrow",
    position: "absolute",
    zIndex: 5,

    [sizes.down("large")]: {
      height: "40vh",
    },

    [sizes.down("medium")]: {
      width: "25vw",
      height: "40vh",
    },

    [sizes.down("small")]: {
      width: "35vw",
      height: "40vh",
    },

    [sizes.down("xsmall")]: {
      width: "60vw",
      height: "50vh",
    },

    [sizes.down("xxsmall")]: {
      width: "70vw",
      height: "50vh",
    },
  },
  top: {
    height: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "1rem",
    borderBottom: "1px solid #d24c4b",
    "& svg": {
      color: "#d24c4b",
      fontSize: "2.5rem",

      [sizes.down("medium")]: {
        fontSize: "1.8rem",
      },

      "&:hover": {
        color: "#d63031",
      },
    },
    "& span:first-child": {
      textAlign: "right",
      fontSize: "1.5rem",
    },
    "& span:last-child": {
      fontSize: "4rem",
      textAlign: "right",
    },
  },
  top__text: {
    display: "flex",
    flexDirection: "column",
  },

  bottom: {
    height: "75%",
    fontSize: "3rem",
    display: "grid",
    gridTemplateColumns: "repeat(4, 25%)",
    gridTemplateRows: "repeat(5, 20%)",
    "& div": {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        backgroundColor: "#f5f6fa",
      },
    },

    [sizes.down("large")]: {
      fontSize: "2.5rem",
    },

    [sizes.down("xsmall")]: {
      fontSize: "2.8rem",
    },
  },
  bottom__number: {
    cursor: "default",
    color: "black",
  },
});
