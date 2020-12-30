import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import songs from "../utils/songs";
import MusicItem from "./MusicItem";
import Draggable from "react-draggable";
import useStyles from "../styles/MusicPlayerStyles";

function Music(props) {
  const { closeMusicPlayer } = props;
  const classes = useStyles(props);
  const [currentTab, setCurrentTab] = useState("HipHop");
  const [downloads, setDownloads] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToDownloads = (song) => {
    for (const s of downloads) {
      if (s.title === song.title) {
        return;
      }
    }
    setDownloads([...downloads, song]);
  };

  const addToFavorites = (song) => {
    for (const s of favorites) {
      if (s.title === song.title) {
        return;
      }
    }
    setFavorites([...favorites, song]);
  };

  return (
    <Draggable>
      <div className={classes.root}>
        <div className={classes.left}>
          <div className={classes.search}>
            <input type="text" placeholder="Search..." />
            <SearchIcon />
          </div>
          <div className={classes.categories}>
            <div
              className={classes.categories__item}
              onClick={() => setCurrentTab("Home")}
            >
              Home
            </div>
            <div
              onClick={() => setCurrentTab("Favorites")}
              className={classes.categories__item}
            >
              Favorites
            </div>
            <div
              onClick={() => setCurrentTab("Downloads")}
              className={classes.categories__item}
            >
              Downloads
            </div>
            <div
              className={classes.categories__item}
              onClick={() => setCurrentTab("HipHop")}
            >
              Hip Hop
            </div>
            <div
              className={classes.categories__item}
              onClick={() => setCurrentTab("R&B")}
            >
              R & B
            </div>
            <div
              className={classes.categories__item}
              onClick={() => setCurrentTab("Rock")}
            >
              Rock
            </div>
            <div className={classes.categories__item}>Electronic</div>
            <div className={classes.categories__item}>Dance</div>
            <div className={classes.categories__item}>Top 10</div>
            <div className={classes.categories__item}>Top 25</div>
            <div className={classes.categories__item}>Top 50</div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.header}>
            <span>Music Player</span>
            <CloseIcon onClick={closeMusicPlayer} />
          </div>
          <div className={classes.content}>
            {currentTab === "Home" && (
              <div>
                <h2>All Songs</h2>
              </div>
            )}
            {currentTab === "HipHop" &&
              songs.hiphop.map((song) => (
                <MusicItem
                  {...song}
                  key={song.id}
                  addToDownloads={addToDownloads}
                  addToFavorites={addToFavorites}
                />
              ))}
            {currentTab === "R&B" &&
              songs.randb.map((song) => (
                <MusicItem
                  {...song}
                  key={song.id}
                  addToDownloads={addToDownloads}
                  addToFavorites={addToFavorites}
                />
              ))}
            {currentTab === "Rock" &&
              songs.rock.map((song) => (
                <MusicItem
                  {...song}
                  key={song.id}
                  addToDownloads={addToDownloads}
                  addToFavorites={addToFavorites}
                />
              ))}
            {currentTab === "Favorites" &&
              favorites.map((song) => (
                <MusicItem
                  {...song}
                  key={song.id}
                  addToDownloads={addToDownloads}
                  addToFavorites={addToFavorites}
                />
              ))}
            {currentTab === "Downloads" &&
              downloads.map((song) => (
                <MusicItem
                  {...song}
                  key={song.id}
                  addToDownloads={addToDownloads}
                  addToFavorites={addToFavorites}
                />
              ))}
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default Music;
