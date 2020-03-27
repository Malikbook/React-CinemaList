import React from "react";
// import { moviesData } from "../moviesData";
import WillWatch from "./WillWatch";
import MovieTabs from "./MovieTabs"

function removeMovie (movie) {
  console.log("/// removeMovie");
  console.log(this, "MOVIE single", movie);

  const updateMovies = this.state.movies.filter(function (item) {
    return item.id  !== movie.id;
  })
  console.log(updateMovies);
  this.setState({
    movies: updateMovies
  })
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc"
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies()
};

getMovies = () =>{
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&sort_by=${this.state.sort_by}`).then((response) => {
      console.log('then')
      return response.json()
    }).then((data) => {
      console.log(data)
      this.setState({
        movies: data.results
      })
    })
}

  componentDidUpdate(prevProps, prevState) {
    if(prevState.sort_by !== this.state.sort_by){
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&sort_by=${this.state.sort_by}`).then((response) => {
      console.log('then')
      return response.json()
    }).then((data) => {
      console.log(data)
      this.setState({
        movies: data.results
      })
    })
    }
  }

  addMovieToWillWatch = (movie) => {
    // console.log(movie);
    // this.state.moviesWillWatch.push(movie);
    // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    // updateMoviesWillWatch.push(movie);
    
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })

  };
  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.pop(movie);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  };

  uppdateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    // console.log("App this", this.state.movies[1].title);
    return (
      <div className="container">
        <div className="row">
          <MovieList 
          uppdateSortBy={this.uppdateSortBy} 
          sort_by={this.state.sort_by} 
          movies={this.state.movies} 
          appThis = {this} 
          addMovieToWillWatch = {this.addMovieToWillWatch} 
          removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>
          <div className="col-4 col-sm-3 mt-4">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item bg-info">
                  <div style={{border: '1px solid gray', padding: '5px', borderRadius: '3px'}} className="d-flex mx-n3 my-n2 flex-wrap justify-content-between bg-white">
                    <p>{movie.title}</p>
                    <p>Rating: {movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class MovieList extends React.Component {
  render() {
    const {movies, appThis, removeMovieFromWillWatch, addMovieToWillWatch } = this.props;
    // console.log("MovieList movies", movies, removeMovie);
    return (
      <div className="col-8 col-sm-9">
      <div className="row">
        <div className="col-12">
            <MovieTabs sort_by={this.props.sort_by} 
            uppdateSortBy={this.props.uppdateSortBy}/>
          </div>
        </div>
        <div className="row">
          {movies.map(movie => {
            return (
              <div className="offset-1 col-10 offset-sm-0 col-sm-6 mt-4" key={movie.id}>
                <WillWatch movie={movie} removeMovie={removeMovie} appThis = {appThis} addMovieToWillWatch = {addMovieToWillWatch} removeMovieFromWillWatch = {removeMovieFromWillWatch} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
