import React from "react";
import PauseIcon from "@material-ui/icons/Pause";
import useStyles from "../styles/MusicTabStyles";

function MusicTab(props) {
  const { song } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <span>Currently playing: </span>
      <div className={classes.bottom}>
        <img src={song.imageUrl} />
        <div className={classes.info}>
          <div className={classes.title}>{song.title}</div>
          <div className={classes.artist}>{song.artist}</div>
          <div className={classes.controls}>
            <PauseIcon />
            <div className={classes.progressBar} />
            <span>3:08</span>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default MusicTab;
