import React, { useState, useEffect } from "react";
import DesktopFooter from "./DesktopFooter";
import { withStyles } from "@material-ui/styles";
import Calendar from "react-calendar";
import FileManager from "./FileManager";
import styles from "../styles/DesktopStyles";
import AppCenter from "./AppCenter";
import Music from "./Music";
import Calculator from "./Calculator";
import Terminal from "./Terminal";
import Settings from "./Settings";
import DesktopHeader from "./DesktopHeader";
import "react-calendar/dist/Calendar.css";
import MusicTab from "./MusicTab";
import { useSelector } from "react-redux";
import Notification from "./Notification";
import PowerOptions from "./PowerOptions";
import "../App.css";

function Desktop(props) {
  const { classes } = props;
  const [appCenterOpen, setAppCenterOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [fileManagerOpen, setFileManagerOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [musicPlayerOpen, setMusicPlayerOpen] = useState(false);
  const [musicTabOpen, setMusicTabOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [powerOptionsOpen, setPowerOptionsOpen] = useState(false);

  const [currentBackground, setCurrentBackground] = useState("wallpaper1.jpg");
  const [currentUser, setCurrentUser] = useState("Guest");

  const currentSong = useSelector((state) => state.currentSong);

  useEffect(() => {
    try {
      setCurrentUser(props.history.location.state.usernam);
    } catch (err) {
      props.history.push("/");
    }
  }, []);

  const openModal = (icon) => {
    switch (icon) {
      case "appcenter":
        openAppCenter();
        break;
      case "filemanager":
        setFileManagerOpen(true);
        break;
      case "musicplayer":
        setMusicPlayerOpen(true);
        break;

      case "calculator":
        setCalculatorOpen(true);
        break;

      case "terminal":
        setTerminalOpen(true);
        break;

      case "settings":
        toggleSettings();
        break;

      case "calendar":
        toggleCalendarOpen();
        break;
    }
  };

  const closeModal = () => {
    setFileManagerOpen(false);
  };

  const openAppCenter = () => {
    setAppCenterOpen(true);
  };

  const closeAppCenter = () => {
    setAppCenterOpen(false);
  };

  const openMusicPlayer = () => {
    setMusicPlayerOpen(true);
  };

  const closeMusicPlayer = () => {
    setMusicPlayerOpen(false);
  };

  const openCalculator = () => {
    setCalculatorOpen(true);
  };

  const closeCalculator = () => {
    setCalculatorOpen(false);
  };

  const closeTerminal = () => {
    setTerminalOpen(false);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleBackgroundChange = (background) => {
    setCurrentBackground(background);
  };

  const toggleCalendarOpen = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleCalendarClick = (event) => {};

  const toggleMusicTab = () => {
    setMusicTabOpen(!musicTabOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const togglePowerOptions = () => {
    setPowerOptionsOpen(!powerOptionsOpen);
  };

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${require(`../img/${currentBackground}`)})`,
      }}
    >
      <DesktopHeader
        toggleSettings={toggleSettings}
        toggleCalendarOpen={toggleCalendarOpen}
        toggleMusicTab={toggleMusicTab}
        toggleNotifications={toggleNotifications}
        togglePowerOptions={togglePowerOptions}
      />
      {fileManagerOpen && <FileManager closeModal={closeModal} />}
      {appCenterOpen && <AppCenter closeAppCenter={closeAppCenter} />}
      {musicPlayerOpen && <Music closeMusicPlayer={closeMusicPlayer} />}
      {calculatorOpen && <Calculator closeCalculator={closeCalculator} />}
      {terminalOpen && (
        <Terminal closeTerminal={closeTerminal} currentUser={currentUser} />
      )}
      {settingsOpen && (
        <Settings handleBackgroundChange={handleBackgroundChange} />
      )}
      {calendarOpen && (
        <Calendar className={classes.calendar} onChange={handleCalendarClick} />
      )}

      {musicTabOpen && <MusicTab song={currentSong} />}

      {notificationsOpen && <Notification />}

      {powerOptionsOpen && <PowerOptions />}

      <DesktopFooter
        className={classes.footer}
        closeModal={closeModal}
        openModal={openModal}
      />
    </div>
  );
}

export default withStyles(styles)(Desktop);
