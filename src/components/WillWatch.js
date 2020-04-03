import React from "react";

class WillWatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      willWatch: false
    };
  }

  clikShow = () => {
    this.setState({
      show: !this.state.show
    })
  };

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
        <div className="card-body align-items-stretch" style={{background: this.state.willWatch ? 'rgba(166, 253, 199, 0.705)' : 'rgba(211, 211, 211, 0.616)'}}>
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
          </div>
          {this.state.show ? <p className="mt-2">{movie.overview}</p> : null}
          <div className="d-flex mr-n2 mr-sm-n0 justify-content-center align-items-center mt-3">

          <button 
          type="button" 
          className="btn btn-primary btn-sm mr-2 p-2 p-sm-3 p-md-2 p-xl-3" 
          onClick={this.clikShow}>{this.state.show ? "Hide" : "Show" }
          </button>
          
          <button type="button" 
          className={this.state.willWatch ? "btn btn-secondary btn-sm p-2 p-sm-3 p-md-2 p-xl-3" : "btn btn-success btn-sm p-2 p-sm-3 p-md-2 p-xl-3"}
          onClick={() => {
          this.setState({
            willWatch: !this.state.willWatch
          })
            this.state.willWatch ? removeMovieFromWillWatch(movie) : addMovieToWillWatch(movie);
          }}>
            {this.state.willWatch ? 'Remove Watch' : 'Will Watch'}
          </button>
            
            <button
              type="button"
              title="{movie.title}"
              className="btn btn-danger btn-sm mx-2 p-2 p-sm-3 p-md-2 p-xl-3"
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