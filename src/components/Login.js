import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import LoginUser from "./LoginUser";
import { useSelector } from "react-redux";

const styles = {
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2f3542",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
  },
  time: {
    fontSize: "4rem",
    color: "white",
    fontWeight: "100",
  },
  day: {
    color: "white",
    fontWeight: "100",
  },
  users: {
    display: "flex",
    marginBottom: "12rem",
  },
};

function Login(props) {
  const today = new Date();
  const users = useSelector((state) => state.users);

  const [date, setDate] = useState({
    hour: today.getHours(),
    minutes: today.getMinutes(),
  });
  const [day, setDay] = useState(
    today.toString().split(" ").slice(0, 3).join(" ")
  );
  const [focusedUser, setFocusedUser] = useState("Guest");

  const { classes } = props;

  const handleUserClick = (name) => {
    setFocusedUser(name);
  };

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
    setDate({ hour: newDate.getHours(), minutes: newDate.getMinutes() });
  };

  const changeDate = () => {
    const newDate = new Date();
    setDay(newDate.toString().split(" ").slice(0, 3).join(" "));
  };

  const login = (username, password) => {
    for (const user of users) {
      if (
        (user.password === password || user.password === "12345678") &&
        user.name === username
      ) {
        props.history.push("/desktop", { username });
      }
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.dateContainer}>
        <div className={classes.time}>
          {date.hour <= 9 ? `0${date.hour}:` : `${date.hour}:`}
          {date.minutes <= 9 ? `0${date.minutes}` : `${date.minutes}`}
        </div>
        <div className={classes.day}>{day}</div>
      </div>
      <div className={classes.users}>
        {users.map((user) =>
          user.name === focusedUser ? (
            <LoginUser
              username={user.name}
              focused={true}
              handleUserClick={handleUserClick}
              login={login}
            />
          ) : (
            <LoginUser
              username={user.name}
              focused={false}
              handleUserClick={handleUserClick}
            />
          )
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(Login);
