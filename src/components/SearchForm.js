import React from 'react';
// import { faThList } from '@fortawesome/free-solid-svg-icons';

class SearchForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }

        this.handleChang = this.handleChang.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log (this.state.value);
    }
;
    handleChang(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleClick = () => {
        return() => {
            this.props.uppdateSortBy(this.state.value)
            this.setState({
                value: ''
            })
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="input-group flex-wrap justify-content-center justify-content-lg-end">
                <input type="text" className="rounded col-5 col-sm-7 mx-0" onChange={this.handleChang} value={this.state.value} placeholder="
Find Page"></input>
                <button type="submit" onClick={this.handleClick(this.state.value)} className="btn bg-success">Search</button>
            </form>
        )
    }
}

export default SearchForm;