import React from "react";
import useStyles from "../styles/NotificationStyles";

function Notification(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <span>No new notifications.</span>
      <div className={classes.github}>
        <img src="https://image.flaticon.com/icons/svg/25/25231.svg" />

        <a href="https://github.com/shendritk" target="_blank">
          <span>My github profile.</span>
        </a>
      </div>
    </div>
  );
}

export default Notification;
