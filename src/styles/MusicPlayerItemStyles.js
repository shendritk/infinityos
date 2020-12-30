import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #bdc3c7",
  },
  left: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "4rem",
      height: "4rem",
      margin: "1rem 2rem",

      [sizes.down("xxsmall")]: {
        margin: "0.5rem 1rem",
      },
    },
  },
  left__info: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.3rem",
    "& span:last-child": {
      fontWeight: "bold",
    },

    [sizes.down("xxsmall")]: {
      fontSize: "1.1rem",
    },
  },
  right: {
    marginRight: "1rem",
    display: "flex",
    alignItems: "center",
    "& span": {
      fontSize: "1.3rem",
      marginLeft: "1rem",
    },
    "& svg": {
      fontSize: "1.7rem",
      marginLeft: "1rem",
    },
  },
});
