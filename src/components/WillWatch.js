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
    const { moviesWillWatch, movie, removeMovie, appThis, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    // console.log("appThis", appThis, "single movie", movie);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body align-items-stretch" style={{background: (this.state.willWatch || moviesWillWatch.filter( (item) => item.id === movie.id).length !== 0) 
        ? 'rgba(166, 253, 199, 0.705)' : 'rgba(211, 211, 211, 0.616)'}}>
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 card-subtitle">Rating: {movie.vote_average}</p>
          </div>
          {this.state.show ? <p className="mt-2 card-text">{movie.overview}</p> : null}
            </div>
            <div className="d-flex justify-content-center align-items-stretch mt-3 card-footer">
            <button 
            type="button" 
            className="btn align-self-center  btn-primary btn-sm mr-2 p-2 p-sm-3 p-md-2 p-xl-3" 
            onClick={this.clikShow}>{this.state.show ? "Hide" : "Show" }
            </button>
        
            {(this.state.willWatch || moviesWillWatch.filter( (item) => item.id === movie.id).length !== 0)
               ?
               <button type="button" 
            className="btn btn-secondary btn-sm p-2 p-sm-3 p-md-2 p-xl-3"
            onClick={() => {
              removeMovieFromWillWatch(movie);
            }}>
              Remove Watch
            </button> : <button type="button" 
            className="btn btn-success btn-sm p-2 p-sm-3 p-md-2 p-xl-3"
            onClick={() => {
               addMovieToWillWatch(movie);
            }}>
              Will Watch
            </button>
            }
              
              <button
                type="button"
                title="{movie.title}"
                className="btn btn-danger align-self-center btn-sm mx-2 p-2 p-sm-3 p-md-2 p-xl-3"
                onClick={removeMovie.bind(appThis, movie) }
              >
                <span className="material-icons">&#10008;</span>
              </button>
            </div>
        </div>
    );
  }
}


export default WillWatch;