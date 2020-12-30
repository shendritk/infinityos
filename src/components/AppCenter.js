import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import RemoveIcon from "@material-ui/icons/Remove";
import { editorsPick, communication, development } from "../utils/storeImages";
import AppCenterApp from "./AppCenterApp";
import Draggable from "react-draggable";
import useStyles from "../styles/AppCenterStyles";

function AppCenter(props) {
  const { closeAppCenter } = props;
  const classes = useStyles(props);
  return (
    <Draggable>
      <div className={classes.root}>
        <div className={classes.header}>
          <SearchIcon className={classes.header__search} />
          <div className={classes.header__tabs}>
            <span className={classes.header__tab}>Explore</span>
            <span className={classes.header__tab}>Installed</span>
          </div>
          <div className={classes.header__icons}>
            <RemoveIcon />
            <CancelIcon onClick={closeAppCenter} />
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes.main__bottom}>
            <div className={classes.main__bottomRow}>
              <span>Editor's Picks</span>
              <div className={classes.main_bottomRowContainer}>
                {editorsPick.map((app) => (
                  <AppCenterApp
                    className={classes.main_bottomRowApp}
                    url={app.url}
                    name={app.name}
                    rating={app.rating}
                  />
                ))}
              </div>
            </div>
            <div className={classes.main__bottomRow}>
              <span>Communication and Audio</span>
              <div className={classes.main_bottomRowContainer}>
                {communication.map((app) => (
                  <AppCenterApp
                    className={classes.main_bottomRowApp}
                    url={app.url}
                    name={app.name}
                    rating={app.rating}
                  />
                ))}
              </div>
            </div>
            <div className={classes.main__bottomRow}>
              <span>Development</span>
              <div className={classes.main_bottomRowContainer}>
                {development.map((app) => (
                  <AppCenterApp
                    className={classes.main_bottomRowApp}
                    url={app.url}
                    name={app.name}
                    rating={app.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
export default AppCenter;
