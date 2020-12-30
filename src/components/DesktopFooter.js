import React from "react";
import images from "../utils/images";
import AppIcon from "./AppIcon";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    position: "absolute",
    display: "flex",
    bottom: "4%",
  },
  
};

function DesktopFooter(props) {
  const { classes, closeModal, openModal } = props;
  return (
    <div className={classes.root}>
      {images.map((image) => (
        <AppIcon
        className={classes.icon}
          key={image}
          src={image}
          closeModal={closeModal}
          openModal={openModal}
        />
      ))}
    </div>
  );
}

export default withStyles(styles)(DesktopFooter);
