import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    backgroundColor: "black",
    width: "100%",
    height: "3.5rem",
    opacity: "0.7",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.3rem",
    padding: "2px 1.5rem",
    "& span": {
      color: "white",
    },
    "& svg": {
      color: "white",
      marginRight: "2rem",
      fontSize: "2rem",

      [sizes.down("xsmall")]: {
        marginRight: "1rem",
      },
    },

    [sizes.down("xsmall")]: {
      padding: "2px 0rem",
    },

    [sizes.down("xxsmall")]: {
      fontSize: "1.1rem",
    },
  },
  left: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: "0.5rem",
    },
  },
  right: {
    display: "flex",
    alignItems: "flex-end",
  },
});
