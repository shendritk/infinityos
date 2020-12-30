import React, { useRef } from "react";
import { withStyles } from "@material-ui/styles";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  root: {
    backgroundImage: "linear-gradient(to bottom, #dfe4ea, #f1f2f6)",
    borderRadius: "4px",
    "& ul": {
      listStyle: "none",
      padding: "10px",
    },
    "& li svg": {
      fontSize: "1rem",
      marginRight: "10px",
      marginTop: "4px",
    },
  },
};

function FileManagerMenu(props) {
  const { classes, handleMenuItemClick } = props;

  const handleItemClick = (e) => {
    handleMenuItemClick(e.target.innerHTML);
  };

  return (
    <div className={classes.root}>
      <ul>
        <li onClick={handleItemClick}>
          <FolderOpenIcon />
          <span>Open</span>
        </li>
        <li onClick={handleItemClick}>
          <DeleteIcon />
          <span>Delete</span>
        </li>
        <li>
          <FileCopyIcon />
          <span>Copy</span>
        </li>
        <li>
          <FolderIcon />
          <span>Paste</span>
        </li>
        <li>
          <InsertDriveFileIcon />
          <span>New File</span>
        </li>
        <li>
          <CreateNewFolderIcon />
          <span>New Folder</span>
        </li>
      </ul>
    </div>
  );
}

export default withStyles(styles)(FileManagerMenu);
