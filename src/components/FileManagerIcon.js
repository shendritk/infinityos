import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "20px",
    fontSize: "1.3rem",
    "& img": {
      width: "5rem",
    },
  },
  name: {
    textOverflow: "ellipsis",
  },
};

function FileManagerIcon(props) {
  const {
    file,
    folder,
    name,
    classes,
    editing,
    handleCurrentFolderChange,
  } = props;

  const handleClick = () => {
    folder && handleCurrentFolderChange(name);
  };

  return (
    <div className={classes.root} onDoubleClick={handleClick}>
      {file && <img src={require("../img/document.svg")} />}
      {folder && <img src={require("../img/folder.svg")} />}
      {editing ? (
        <input type="text"></input>
      ) : (
        <span className={classes.name}>{name}</span>
      )}
    </div>
  );
}

export default withStyles(styles)(FileManagerIcon);
