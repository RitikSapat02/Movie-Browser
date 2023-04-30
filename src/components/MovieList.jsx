import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Axios from "axios";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

class MovieList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    //is a lifecycle funtion which is called exactly once for the component when it is initially rendered

    this.fetchMovies();
  }

  componentDidUpdate(prevPros) {
    if (this.props.location !== prevPros.location) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    let q = queryString.parse(this.props.location.search);
    Axios.get(`https://www.omdbapi.com/?apikey=1b6e489c&s=${q.searchText}`)
      .then((resp) => resp.data)
      .then((data) => data.Search)
      .then((movies) => this.setState({ movies: movies }));
  };

  //setstate invokes the render function

  render() {
    const movieList = this.state.movies.map((m) => (
      <MovieCard movie={m} key={m.imdbID} />
    ));

    return <div className="row">{movieList}</div>;
  }
}

export default withRouter(MovieList);
