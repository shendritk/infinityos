import background from "../img/wallpaper1.jpg";

export default {
  root: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "2rem",
  },
  calendar: {
    position: "absolute",
    top: "5%",
  },
  musicTab: {
    fontSize: "4rem",
    color: "white",
  },
};
