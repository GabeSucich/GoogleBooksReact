import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Saved from "./pages/Saved"
import Search from "./pages/Search"
import API from "./utils/API"
import { BookProvider } from "./utils/GlobalState"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Router>
        <BookProvider>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/saved" component={Saved} />
              <Route component={Search} />
            </Switch>
          </div>
        </BookProvider>
      </Router>
    </div>
  );
}


export default App;
