import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import useStyles from "../styles/DesktopHeaderStyles";

function DesktopHeader(props) {
  const {
    toggleSettings,
    toggleCalendarOpen,
    toggleMusicTab,
    toggleNotifications,
    togglePowerOptions,
  } = props;
  const classes = useStyles(props);

  const today = new Date();

  const [date, setDate] = useState({
    hour: today.getHours(),
    minutes: today.getMinutes(),
  });
  const [day, setDay] = useState(
    today.toString().split(" ").slice(0, 3).join(" ")
  );

  useEffect(() => {
    const second = 1000;
    const timeInterval = setInterval(() => changeTime(), 1000);
    const dayInterval = setInterval(() => changeDate(), 20 * second);
    return () => {
      clearInterval(timeInterval);
      clearInterval(dayInterval);
    };
  }, []);

  const changeTime = () => {
    const newDate = new Date();
    if (newDate.getMinutes() <= 9) {
      setDate({
        hour: newDate.getHours(),
        minutes: `0${newDate.getMinutes()}`,
      });
    } else if (newDate.getHours() <= 9) {
      setDate({
        hour: `0${newDate.getHours()}`,
        minutes: newDate.getMinutes(),
      });
    } else {
      setDate({ hour: newDate.getHours(), minutes: newDate.getMinutes() });
    }
  };

  const changeDate = () => {
    const newDate = new Date();
    setDay(newDate.toString().split(" ").slice(0, 3).join(" "));
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <SearchIcon />
        <span>Applications</span>
      </div>
      <span onClick={toggleCalendarOpen}>
        {day}, {date.hour}:{date.minutes}
      </span>
      <div className={classes.right}>
        <MusicNoteIcon onClick={toggleMusicTab} />
        <SettingsEthernetIcon onClick={toggleSettings} />
        <NotificationsIcon onClick={toggleNotifications} />
        <PowerSettingsNewIcon onClick={togglePowerOptions} />
      </div>
    </div>
  );
}

export default DesktopHeader;
