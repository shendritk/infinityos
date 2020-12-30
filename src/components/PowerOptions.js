import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PeopleIcon from "@material-ui/icons/People";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useStyles from "../styles/PowerOptionsStyles";

function PowerOptions(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <ul>
        <Link to="/">
          <li>
            <ExitToAppIcon />
            Log out
          </li>
        </Link>
        <hr />
        <Link to="/">
          <li>
            <PeopleIcon />
            Switch user
          </li>
        </Link>
        <hr />
        <Link to="/">
          <li>
            <PowerSettingsNewIcon />
            Shutdown
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default PowerOptions;
