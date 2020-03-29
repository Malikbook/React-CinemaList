import React from "react";
// import { moviesData } from "../moviesData";
import WillWatch from "./WillWatch";
import MovieTabs from "./MovieTabs"

function removeMovie (movie) {
  console.log("/// removeMovie");
  console.log(this, "MOVIE single", movie);

  this.removeMovieFromWillWatch(movie);

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
      sort_by: 1,
<<<<<<< HEAD
      data: '',
      willWat: false
=======
      data: ''
>>>>>>> 9c952ecac7882ca718c1a71f27bf555294d19f88
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies()
};

getMovies = () =>{
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&page=${this.state.sort_by}`).then((response) => {
      console.log('then')
      return response.json()
    }).then((data) => {
      this.setState({
        data: data
      })
      console.log(data)
      this.setState({
        movies: data.results,
      })
    })
<<<<<<< HEAD
};
=======
}
>>>>>>> 9c952ecac7882ca718c1a71f27bf555294d19f88

  componentDidUpdate(prevProps, prevState) {
    if(prevState.sort_by !== this.state.sort_by){
      this.getMovies()
    }
  }

  addMovieToWillWatch = (movie) => {
    // console.log(movie);
    // this.state.moviesWillWatch.push(movie);
    // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    // updateMoviesWillWatch.push(movie);
    
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    })
  };

<<<<<<< HEAD
=======
  };
>>>>>>> 9c952ecac7882ca718c1a71f27bf555294d19f88
  removeMovieFromWillWatch = (movie) => {
 
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    let index = updateMoviesWillWatch.indexOf(movie);
    if (index > -1){
    updateMoviesWillWatch.splice(index, 1)
    }
    
    console.log(updateMoviesWillWatch)
    
    this.setState({
        moviesWillWatch: updateMoviesWillWatch
      })
    };

  uppdateSortBy = value => {
    this.setState({
<<<<<<< HEAD
      sort_by: value
    });
  };

  uppdateWillWat = value => {
    this.setState({
      willWat: value
    });
  };


  dellAll = () => {
    this.uppdateWillWat(false)
    console.log("willwat", this.state.willWat)

    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.splice(0, updateMoviesWillWatch.length);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
      willWat: this.uppdateWillWat(false)
      })
  };


=======
      moviesWillWatch: updateMoviesWillWatch
    })
  };

  uppdateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };
>>>>>>> 9c952ecac7882ca718c1a71f27bf555294d19f88

  render() {
    // console.log("total", this.state.data.total_pages)
    return (
      <div className="container">
        <div className="row">
          <MovieList 
          uppdateSortBy={this.uppdateSortBy} 
          data={this.state.data}
          sort_by={this.state.sort_by} 
          movies={this.state.movies} 
          appThis = {this} 
          addMovieToWillWatch = {this.addMovieToWillWatch} 
          removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>
          <div className="col-4 col-sm-3 mt-4">
              <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
              <button className="btn btn-sm btn-danger" onClick={this.dellAll} type="button">Dell. All</button>
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
            uppdateSortBy={this.props.uppdateSortBy}
            data={this.props.data}  
            />
          </div>
        </div>
        <div className="row">
          {movies.map(movie => {
            return (
              <div className="offset-1 col-10 offset-sm-0 col-sm-6 mt-4" key={movie.id}>
                <WillWatch 
                movie={movie}  
                removeMovie={removeMovie} 
                appThis = {appThis} 
                addMovieToWillWatch = {addMovieToWillWatch} 
                removeMovieFromWillWatch = {removeMovieFromWillWatch} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
