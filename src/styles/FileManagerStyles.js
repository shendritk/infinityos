import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

export default makeStyles({
  modal: {
    height: "60vh",
    width: "50vw",
    backgroundColor: "#ecf0f1",
    position: "absolute",
    zIndex: 30,

    [sizes.down("large")]: {
      width: "60vw",
      height: "50vh",
    },

    [sizes.down("medium")]: {
      width: "90vw",
      height: "45vh",
    },

    [sizes.down("xsmall")]: {
      width: "90vw",
      height: "50vh",
    },
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "7%",
    borderBottom: "1px solid #8395a7",
    padding: "0 1rem",
    cursor: "all-scroll",

    "& svg": {
      fontSize: "2rem",
      color: "#535c68",
      cursor: "pointer",
    },
    "& input": {
      flexGrow: "2",
      outline: "none",
      borderRadius: "2px",
      padding: "4px 1rem",
      marginRight: "1rem",
      marginLeft: "0.5rem",
      border: "0.5px solid #95a5a6",
      "&::placeholder": {
        fontSize: "1.2rem",
      },

      [sizes.down("xsmall")]: {
        width: "100%",
        "&::placeholder": {
          fontSize: "1rem",
        },
      },
    },

    [sizes.down("large")]: {
      height: "10%",
    },
  },
  icon: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    marginLeft: "4px",
    border: "0.5px solid rgba(0,0,0,0.7)",
  },
  modalIconsLeft: {
    margin: "0 5px",
  },
  modalViewBy: {
    marginRight: "2rem",
    marginLeft: "1.5rem",
    display: "flex",
    height: "10%",
    alignItems: "center",
    "& svg": {
      color: "#2d3436",
      border: "0.5px solid #95a5a6",
      borderRadius: "2px",

      "&:nth-child(2)": {
        borderRadius: "0",
      },
    },

    [sizes.down("xxsmall")]: {
      marginRight: "1rem",
      marginLeft: "0.5rem",
    },
  },
  modalToolbar: {
    height: "5%",
    display: "flex",
    alignItems: "center",
  },
  toolbarLeft: {
    width: "20%",
    height: "100%",
    borderRight: "1px solid gray",
    fontSize: "1.4rem",
    fontWeight: "bold",
    paddingLeft: "15px",
    paddingTop: "5px",

    [sizes.down("xsmall")]: {
      width: "25%",
    },

    [sizes.down("xsmall")]: {
      width: "40%",
    },
  },
  toolbarRight: {
    width: "80%",
    height: "100%",
    display: "flex",
    fontSize: "1.4rem",
    alignItems: "center",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",

    "& svg": {
      fontSize: "1.8rem",
      width: "5%",
      position: "absolute",
      left: "0",
    },

    "&:last-child": {
      marginRight: "0.5rem",
    },

    [sizes.down("xsmall")]: {
      width: "75%",
    },
  },
  toolbarRightTab: {
    display: "flex",
    alignItems: "center",
    borderBottom: "2px solid #718093",
    boxShadow: "0 1px lightgray",
    width: "30%",
    height: "100%",
    justifyContent: "center",
    "&: hover": {
      "& svg": {
        color: "#ff6b6b",
      },
      "& span": {
        color: "#2d3436",
      },
    },
  },

  main: {
    width: "100%",
    height: "88%",
    display: "flex",
    flexDirection: "row",
  },
  left: {
    width: "20%",
    borderRight: "1px solid gray",
    height: "100%",

    [sizes.down("large")]: {
      height: "75%",
    },

    [sizes.down("xsmall")]: {
      width: "25%",
    },

    [sizes.down("xsmall")]: {
      width: "40%",
    },
  },

  leftRow: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "2rem",
    marginBottom: "3px",
    padding: "2px 0",
    "& svg": {
      fontSize: "1.3rem",
      color: "#576574",
      marginRight: "5px",
    },
    "& span": {
      fontSize: "1.5rem",
    },
    "&:hover ": {
      backgroundColor: "#dfe6e9",
      "& svg": {
        color: "#ff6b6b",
      },
      "& span": {
        color: "#2d3436",
      },
    },

    [sizes.down("xsmall")]: {
      paddingLeft: "1rem",
    },
  },
  right: {
    backgroundColor: "white",
    width: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(8, 10%)",
    gridAutoRows: "15%",
    gridGap: "2%",
    paddingTop: "1.5rem",
    height: "100%",
    fontSize: "1.4rem",
    paddingLeft: "10px",
    overflow: "auto",
    "& svg": {
      fontSize: "5rem",
    },

    [sizes.down("medium")]: {
      gridTemplateColumns: "repeat(7, 10%)",
    },

    [sizes.down("small")]: {
      gridTemplateColumns: "repeat(6, 14%)",
    },

    [sizes.down("xsmall")]: {
      gridTemplateColumns: "repeat(4, 20%)",
      width: "75%",
    },

    [sizes.down("xsmall")]: {
      gridTemplateColumns: "repeat(2, 40%)",
      gridRowGap: "6%",
    },
  },
  contextMenu: {
    backgroundColor: "black",
    color: "white",
    width: "140px",
    padding: "10px 10px",
  },
});
