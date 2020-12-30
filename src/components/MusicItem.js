import React, { useState } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch } from "react-redux";
import { playSong } from "../actions/musicActions";
import useStyles from "../styles/MusicPlayerItemStyles";

function MusicItem(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    id,
    title,
    imageUrl,
    artist,
    duration,
    addToDownloads,
    addToFavorites,
  } = props;

  const handleClickDownload = () => {
    const song = {
      id,
      title,
      imageUrl,
      artist,
      duration,
    };
    addToDownloads(song);
  };

  const handleClickFavorite = () => {
    setIsFavorite(true);
    const song = {
      id,
      title,
      imageUrl,
      artist,
      duration,
    };
    addToFavorites(song);
  };

  const handleClick = () => {
    const song = {
      id,
      title,
      imageUrl,
      artist,
      duration,
    };
    dispatch(playSong(song));
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.left}>
        <div className={classes.left__image}>
          <img src={imageUrl} />
        </div>
        <div className={classes.left__info}>
          <span>{title}</span>
          <span>{artist}</span>
        </div>
      </div>
      <div className={classes.right}>
        <GetAppIcon onClick={handleClickDownload} />
        <FavoriteBorderIcon onClick={handleClickFavorite} />
        <span>{duration}</span>
      </div>
    </div>
  );
}

export default MusicItem;
