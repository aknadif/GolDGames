import React, { Component } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Page/detail/Detail";
import Home from "./Page/home/Home";
export default class Root extends Component {
  render() {
    return (
      <div className="app">
        <div className="blocking" />
        <h4 className="text-blocking">Maaf, halaman ini belum support mobile view...</h4>
        <Router>
          <Switch>
            <Route path="/detail" component={Detail} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
let container = document.getElementById("app");
let component = <Root />;
ReactDOM.render(component, container);
