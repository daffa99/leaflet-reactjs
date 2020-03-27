import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// Pages
import MainPage from "./pages/mainPage";
// CSS
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/browse" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
