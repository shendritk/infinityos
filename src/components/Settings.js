import React, { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Draggable from "react-draggable";
import useStyles from "../styles/SettingsStyles";
import photos from "../utils/wallpapers";

function Settings(props) {
  const { handleBackgroundChange } = props;
  const classes = useStyles(props);
  const [photo, setPhoto] = useState(0);

  const goBack = () => {
    if (photo === 0) {
      handleBackgroundChange(photos[7]);
      setPhoto(7);
    } else {
      handleBackgroundChange(photos[photo - 1]);
      setPhoto(photo - 1);
    }
  };

  const goForward = () => {
    if (photo === 7) {
      handleBackgroundChange(photos[0]);
      setPhoto(0);
    } else {
      handleBackgroundChange(photos[photo + 1]);
      setPhoto(photo + 1);
    }
  };
  return (
    <Draggable>
      <div className={classes.root}>
        <span>Background: </span>
        <div className={classes.image}>
          <NavigateBeforeIcon onClick={goBack} />
          <img
            width="300"
            height="200"
            src={require(`../img/${photos[photo]}`)}
          />
          <NavigateNextIcon onClick={goForward} />
        </div>
      </div>
    </Draggable>
  );
}

export default Settings;
