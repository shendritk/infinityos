import React from "react";
import Rating from "@material-ui/lab/Rating";
import useStyles from "../styles/AppCenterAppStyles";
import StarIcon from "@material-ui/icons/Star";

function AppCenterApp(props) {
  const { url, name, rating } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <img src={`${url}`} className={classes.icon} />
      <span className={classes.name}>{name}</span>
      {window.innerWidth > 768 ? (
        <Rating
          className={classes.rating}
          name="read-only"
          value={rating}
          readOnly
        />
      ) : (
        <div className={classes.rating__lowScreenSize}>
          <span>{rating}</span>
          <StarIcon />
        </div>
      )}
    </div>
  );
}

export default AppCenterApp;
