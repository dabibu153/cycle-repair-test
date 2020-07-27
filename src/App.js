import React from "react";
import Nav from "./components/Nav";
import About from "./components/about";
import Appointment from "./components/appointment";
import Location from "./components/map";
import { BrowserRouter as Br, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">CYCLE REPAIR TEST</a>
      </header>
      <Br>
        <main>
          <br />
          <Nav />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/appointment" exact component={Appointment} />
            <Route path="/map" exact component={Location} />
          </Switch>
        </main>
      </Br>
      <footer>all rights reserved (not really)</footer>
    </div>
  );
}

export default App;
