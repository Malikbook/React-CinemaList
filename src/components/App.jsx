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
      data: '',
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies();

    if(localStorage.getItem('mov') !== null){
    const localSto = localStorage.getItem('mov');
    const local = JSON.parse(localSto);
    this.setState({
      moviesWillWatch: local
      });
      console.log(local);
    }
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
};

  componentDidUpdate(prevProps, prevState) {
    if(prevState.sort_by !== this.state.sort_by){
      this.getMovies()
    }
  };


  addMovieToWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });

    this.local(updateMoviesWillWatch);
  };

  removeMovieFromWillWatch = (movie) => {
 
    // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    // let index = updateMoviesWillWatch.indexOf(movie);
    // if (index > -1){
    // updateMoviesWillWatch.splice(index, 1)
    // }
    
    // console.log(updateMoviesWillWatch);

    const loc = localStorage.getItem('mov');
    const doc = JSON.parse(loc);

    let del = doc.filter( item => {
      if(item.id === movie.id){
        let ind = doc.indexOf(item);
         if(ind > -1){
           doc.splice(ind, 1)
         }
      }
      return doc;
    } );

    localStorage.setItem('mov', JSON.stringify(doc))

    console.log('loc', doc, del);

    this.setState({
        moviesWillWatch: doc
      })
    };

  uppdateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  uppdateMoviesWillWatch = value => {
    this.setState({
      moviesWillWatch: value
    });
  };

   local = (updateMoviesWillWatch) =>{
    localStorage.setItem('mov', JSON.stringify(updateMoviesWillWatch))
   };

   dell = () =>{
      const updateMoviesWillWatch = [...this.state.moviesWillWatch];
      updateMoviesWillWatch.splice(0, updateMoviesWillWatch.length);
      this.setState({
        moviesWillWatch: updateMoviesWillWatch,
        })

      localStorage.clear('mov')
   }

  render() {
    // console.log("total", this.state.data.total_pages)
    // console.log('rm', this.state.rememberMov)
    // const dell = this.dill;
    return (
      <div className="container px-0">
        <div className="row mx-0 justify-content-center">
          <MovieList 
          moviesWillWatch={this.state.moviesWillWatch}
          arrMoviesId={this.state.arrMoviesId}
          uppdateSortBy={this.uppdateSortBy} 
          data={this.state.data}
          sort_by={this.state.sort_by} 
          movies={this.state.movies} 
          appThis = {this} 
          addMovieToWillWatch = {this.addMovieToWillWatch} 
          removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>
          <div className="col-12 col-sm-3 mt-3 mb-5">
          <h4 className="text-white">Will Watch: {this.state.moviesWillWatch.length} movies</h4>
              <button className="btn btn-sm btn-danger" onClick={this.dell} type="button">Dell. All</button>
            <ul className="list-group rounded text-drk list_mov">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="li_movie list-group-item bg-info mt-2">
                  <div style={{border: '1px solid gray', padding: '5px', borderRadius: '3px'}} className="d-flex mx-n3 my-n2 flex-nowrap justify-content-between bg-white">
                    <div>
                      <p style={{lineHeight: '20px', marginBottom: '0px', paddingBottom: '0px'}}>{movie.title}</p><br />
                      <p style={{lineHeight: '15px', marginTop: '-10px', paddingTop: '5px'}}>Rating: {movie.vote_average}</p>
                    </div>  
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
    const { moviesWillWatch, arrMoviesId, movies, appThis, removeMovieFromWillWatch, addMovieToWillWatch } = this.props;
    // console.log("MovieList movies", movies, removeMovie);
    return (
      <div className="col-10 col-sm-9">
      <div className="row mx-0 justify-content-center">
        <div className="mt-2 w-100">
            <MovieTabs sort_by={this.props.sort_by} 
            uppdateSortBy={this.props.uppdateSortBy}
            data={this.props.data}  
            />
          </div>
        </div>
        <div className="row mb-5 justify-content-center">
          {movies.map(movie => {
            return (
              <div className="card-deck offset-1 col-12 mx-0 offset-sm-0 col-md-6 mt-4" key={movie.id}>
                <WillWatch 
                moviesWillWatch={moviesWillWatch}
                arrMoviesId={arrMoviesId}
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
