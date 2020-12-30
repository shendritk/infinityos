import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  root: {
    borderRadius: "50%",
    marginRight: "1rem",
    transition: "0.5s",
    boxShadow:
      "inset -1px -1px 2px rgba(0,0,0,0.2), 2px 2px 5px rgba(0,0,0,0.2)",
    "&:hover": {
      transform: "translateY(-1.5rem)",
      boxShadow:
        "inset -1px -1px 2px rgba(0,0,0,0.2), 2px 2.4rem 10px rgba(0,0,0,0.2)",
    },
  },
  image: {
    backgroundColor: "white",
    width: "5rem",
    height: "5rem",
    padding: "0.6rem",
    borderRadius: "50%",

    [sizes.down("xxsmall")]: {
      width: "3.5rem",
      height: "3.5rem",
    },
  },
});
