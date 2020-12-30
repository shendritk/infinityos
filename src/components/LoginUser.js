import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import background from "../img/wallpaper8.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardCapslockIcon from "@material-ui/icons/KeyboardCapslock";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    overflow: "hidden",
    position: "relative",
    margin: "1rem",
    width: "300px",
    height: (props) => (props.focused ? "300px" : "200px"),
    display: "flex",
    flexDirection: "column",
    transition: "all 1s",
  },
  top: {
    width: "100%",
    height: (props) => (props.focused ? "50%" : "70%"),
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
  },
  profile: {
    position: "absolute",
    left: "50%",
    top: (props) => (props.focused ? "50%" : "70%"),
    transform: "translate(-50%, -50%)",
    "& svg": {
      width: "50px",
      height: "50px",
    },
  },
  bottom: {
    width: "100%",
    height: (props) => (props.focused ? "50%" : "30%"),
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  login: {
    width: "85%",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
    fontWeight: "bold",
    color: "#00b894",
    fontSize: "1.3rem",
  },
  input: {
    outline: "none",
    borderRadius: "5px",
    border: "1px solid #55efc4",
    padding: "5px 10px",
    marginRight: "1rem",
    display: (props) => (props.focused ? "block" : "none"),
  },
  username: {
    fontSize: "1.3rem",
    marginTop: "1.5rem",
  },
  capslock: {
    fontSize: "1rem",
    display: (props) => (props.focused ? "flex" : "none"),
    alignItems: "center",
    "& span": {
      marginLeft: "0.1rem",
    },
  },
});

function LoginUser(props) {
  const { username, handleUserClick, login } = props;
  const classes = useStyles(props);
  const [capsLockState, setCapsLockState] = useState("off");
  const [typedPasswod, setTypedPassword] = useState("");

  const capsFunc = (e) => {
    const capsLockOn = e.getModifierState("CapsLock");
    capsLockOn ? setCapsLockState("on") : setCapsLockState("off");
  };

  const handleClick = () => {
    handleUserClick(username);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, typedPasswod);
  };

  const handleChange = (event) => {
    setTypedPassword(event.target.value);
  };

  return (
    <form
      className={classes.root}
      onClick={handleClick}
      onSubmit={handleSubmit}
    >
      <div className={classes.top}></div>
      <div className={classes.profile}>
        <AccountCircleIcon color="primary" />
      </div>
      <div className={classes.bottom}>
        <span className={classes.username}>{username}</span>
        <input
          onKeyUp={capsFunc}
          className={classes.input}
          value={typedPasswod}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit" className={classes.login}>
          LOG IN
        </button>
        <div className={classes.capslock}>
          <KeyboardCapslockIcon />
          <span>{`CapsLock is ${capsLockState}`}</span>
        </div>
        <div className={classes.capslock}>
          <span>Guest has no password, just press LOGIN</span>
        </div>
      </div>
    </form>
  );
}

export default LoginUser;
