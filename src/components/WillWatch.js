import React from "react";

class WillWatch extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }
  render() {
    const { movie, removeMovie, appThis, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    // console.log("appThis", appThis, "single movie", movie);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body" style={{background: this.state.willWatch ? 'rgba(144, 248, 144, 0.466)' : 'rgba(211, 211, 211, 0.616)'}}>
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
          </div>

          <div className="d-flex justify-content-end align-items-center mt-3">
            {this.state.willWatch ? (<button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.setState({
                  willWatch: false
                });
                removeMovieFromWillWatch(movie);
              }}
            >
              Remove Watch
            </button>) : (<button
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => {
                this.setState({
                    willWatch: true
                  });
                  addMovieToWillWatch(movie);
              }}
            >
              Will Watch
            </button>)}
            <button
              type="button"
              title="{movie.title}"
              className="btn btn-danger btn-sm mx-2"
            //   onClick={ () => {console.log(this)} }
              onClick={removeMovie.bind(appThis, movie) }
            //   onClick={removeMovie(this, movie) }
            >
              <span className="material-icons">&#10008;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default WillWatch;