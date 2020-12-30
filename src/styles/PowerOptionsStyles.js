import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    position: "absolute",
    top: "3.5%",
    right: "1%",
    backgroundColor: "#f5f6fa",
    opacity: "0.9",
    borderRadius: "3px",
    padding: "0.5rem 1rem",
    "& ul": {
      listStyle: "none",
      "& a": {
        textDecoration: "none",
        color: "#2d3436",
      },
      "& li": {
        display: "flex",
        alignItems: "center",
        fontSize: "1.5rem",
        letterSpacing: "1px",
        margin: "0.5rem 0rem",

        "& svg": {
          fontSize: "2rem",
          marginRight: "1rem",
        },
        "&:hover ": {
          cursor: "pointer",
          color: "#00b894",
        },
      },
    },
  },
});
