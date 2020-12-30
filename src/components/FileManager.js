import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFile } from "../actions/filesActions";
import { addFolder, addFolderPartTwo } from "../actions/foldersActions";
import FileManagerMoreMenu from "./FileManagerMoreMenu";
import Draggable from "react-draggable";
import useStyles from "../styles/FileManagerStyles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AppsIcon from "@material-ui/icons/Apps";
import ReorderIcon from "@material-ui/icons/Reorder";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from "@material-ui/icons/History";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FileManagerIcon from "./FileManagerIcon";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addToStack, removeFromStack } from "../stack";

function FileManager(props) {
  const { closeModal } = props;
  const classes = useStyles(props);
  const folders = useSelector((state) => state.folders);
  const dispatch = useDispatch();

  const [dialogItemName, setDialogItemName] = useState("");
  const [currentFolder, setCurrentFolder] = useState("Home");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [addingType, setAddingType] = useState("");

  const history = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(addToStack(currentFolder, "back"));
  }, [currentFolder]);

  const goBack = () => {
    if (history.back.length > 1) {
      dispatch(removeFromStack("back"));
      dispatch(addToStack(history.back[0], "forward"));
    }
  };

  const goForward = () => {
    if (history.forward.length > 0) {
      dispatch(removeFromStack("forward"));
      dispatch(addToStack(history.forward[0], "back"));
    }
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleDialogInputChange = (e) => {
    setDialogItemName(e.target.value);
  };

  const addItemToState = (e) => {
    e.preventDefault();
    if (addingType == "File") {
      dispatch(addFile(dialogItemName, currentFolder));
    } else if (addingType == "Folder") {
      dispatch(addFolder(dialogItemName, currentFolder));
      dispatch(addFolderPartTwo(dialogItemName));
    }

    handleClose();
  };

  const handleAddFileClick = (type) => {
    setAddingType(type);
    handleOpen(type);
  };

  const handleAddFolderClick = (type) => {
    setAddingType(type);
    handleOpen();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  const handleCurrentFolderChange = (name) => {
    setCurrentFolder(name);
  };

  return (
    <Draggable>
      <div className={classes.modal}>
        <div className={classes.modalHeader}>
          <ArrowBackIcon className={classes.modalIconsLeft} onClick={goBack} />
          <ArrowForwardIcon
            className={classes.modalIconsLeft}
            onClick={goForward}
          />
          <div className={classes.modalViewBy}>
            <AppsIcon />
            <ReorderIcon />
            <ViewWeekIcon />
          </div>
          <SearchIcon />
          <input
            className={classes.modalSearch}
            type="text"
            placeholder="Search or type path"
          />
          <CloseIcon onClick={handleCloseModal} />
        </div>
        <div className={classes.modalToolbar}>
          <div className={classes.toolbarLeft}>
            <span>Personal</span>
          </div>
          <div className={classes.toolbarRight}>
            <div className={classes.toolbarRightTab}>
              <CloseIcon />
              <span>{history.back[0]}</span>
            </div>
            <FileManagerMoreMenu
              handleAddFileClick={handleAddFileClick}
              handleAddFolderClick={handleAddFolderClick}
            />
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes.left}>
            <div
              className={classes.leftRow}
              onClick={() => setCurrentFolder("Home")}
            >
              <HomeIcon />
              <span>Home</span>
            </div>
            <div
              className={classes.leftRow}
              onClick={() => setCurrentFolder("Recent")}
            >
              <HistoryIcon />
              <span>Recent</span>
            </div>
            <div
              className={classes.leftRow}
              onClick={() => setCurrentFolder("Documents")}
            >
              <InsertDriveFileIcon />
              <span>Documents</span>
            </div>
            <div
              className={classes.leftRow}
              onClick={() => setCurrentFolder("Music")}
            >
              <MusicNoteIcon />
              <span>Music</span>
            </div>
            <div
              className={classes.leftRow}
              onClick={() => setCurrentFolder("Pictures")}
            >
              <PhotoLibraryIcon />
              <span>Pictures</span>
            </div>
            <div
              className={classes.leftRow}
              onClick={() => setCurrentFolder("Videos")}
            >
              <VideoLabelIcon />
              <span>Videos</span>
            </div>
            <div
              className={classes.leftRow}
              onClick={() => setCurrentFolder("Downloads")}
            >
              <GetAppIcon />
              <span>Downloads</span>
            </div>
            <div
              className={classes.leftRow}
              onClick={() => setCurrentFolder("Trash")}
            >
              <DeleteIcon />
              <span>Trash</span>
            </div>
          </div>
          <div className={classes.right}>
            {folders[history.back[0]].folders.map((folder) => (
              <FileManagerIcon
                file={false}
                folder
                name={folder}
                editing={false}
                handleCurrentFolderChange={handleCurrentFolderChange}
              />
            ))}
            {folders[history.back[0]].files.map((file) => (
              <FileManagerIcon
                file
                folder={false}
                name={file}
                editing={false}
              />
            ))}

            <Dialog
              open={dialogOpen}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Add a file</DialogTitle>
              <form onSubmit={addItemToState}>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="File Name"
                    type="text"
                    fullWidth
                    value={dialogItemName}
                    onChange={handleDialogInputChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    ADD
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default FileManager;
