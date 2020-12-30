import React from "react";
import useStyles from "../styles/AppIconStyles";

function AppIcon(props) {
  const { src, openModal } = props;
  const classes = useStyles(props);

  const handleClick = () => {
    openModal(src);
  };

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={require(`../img/${src}.svg`)}
        alt={src}
        width="50"
        height="50"
        onClick={handleClick}
      />
    </div>
  );
}

export default AppIcon;
