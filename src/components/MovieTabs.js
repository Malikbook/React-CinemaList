import React from 'react'
import SearchForm from './SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons'
// import ClassNames from 'classnames'


const MovieTabs = (props) => {
    const { sort_by, uppdateSortBy, data} = props;

    const handleClickM = value => {
        return () => {
            if(value >= 2){
                uppdateSortBy(value - 1)
            }else if(value === 1){
                (alert("Non page"))
            }
        }
    };

    const handleClickN = value => {
        return () => {
                uppdateSortBy(value + 1)
        }
    };

   
    return (
        <div className="d-flex justify-content-center justify-content-lg-around flex-wrap mx-0">
            <ul className="tabs nav nav-pills mt-2 flex-nowrap justify-content-center">
                <li className="nav-item navigation align-self-center">
                    <div style={{cursor: 'pointer', borderRadius: '5px'}} className="navigation nav-link p-1"
                    onClick={handleClickM(sort_by)}> 
                        <FontAwesomeIcon className="icon" style={{fontSize: '50px'}} icon={faCaretSquareLeft} color="white" />
                    </div>
                </li>
                <li className="nav-item mx-1">
                    <div style={{ border: '1px black solid', borderRadius: '5px', color: 'white'}} className="px-1 bg-info">
                        <div>
                            Total Pages: {data.total_pages}
                        </div>
                        <div className="nav-link mt-2 mx-2">
                            This page: {sort_by}
                        </div>
                    </div>
                </li>
                <li className="nav-item navigation align-self-center">
                    <div style={{cursor: 'pointer', borderRadius: '5px'}} className="navigation nav-link p-1"
                    onClick={handleClickN(sort_by)}
                    >
                        <FontAwesomeIcon className="icon" style={{fontSize: '50px'}} icon={faCaretSquareRight} color="white" />
                    </div>
                </li>
            </ul>
            <div className="mt-2 align-self-center justify-content-center">
                <SearchForm sort_by={props.sort_by} uppdateSortBy={props.uppdateSortBy}/>
            </div>
        </div>
    )
}

export default MovieTabs;