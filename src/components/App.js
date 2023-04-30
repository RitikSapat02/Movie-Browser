import React, { Component } from "react";
import Header from "./Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

class App extends Component {
  state = { message: "Hello, React!!!" };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/details" component={MovieDetails}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
