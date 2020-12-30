import React from "react";
import "./App.css";
import Desktop from "./components/Desktop";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Music from "./components/Music";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/desktop" component={Desktop} exact />
        <Route path="/music" component={Music} exact />
        <Route path="/settings" component={Settings} />
        <Route render={() => <h2>Not found</h2>} />
      </Switch>
    </div>
  );
}

export default App;
