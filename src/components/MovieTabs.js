import React from 'react'
// import ClassNames from 'classnames'


const MovieTabs = (props) => {
    const { sort_by, uppdateSortBy, data} = props;

    const handleClickM = value => {
        return event => {
            if(value >= 2){
                uppdateSortBy(value - 1)
            }else if(value === 1){
                (alert("Non page"))
            }
        }
    };

    const handleClickN = value => {
        return event => {
                uppdateSortBy(value + 1)
        }
    };

   
    return (
        <ul className="tabs nav nav-pills mt-2">
            <li className="nav-item">
                <div style={{cursor: 'pointer', borderRadius: '5px'}} className="navigation nav-link mt-2 p-1"
                onClick={handleClickM(sort_by)}
                >
                    Previous Page 
                </div>
            </li>
            <li className="nav-item mx-3">
                <div style={{cursor: 'pointer', border: '1px black solid', borderRadius: '5px'}} className="px-2">
                    <div>
                        Total Pages: {data.total_pages}
                    </div>
                    <div className="nav-link mt-2 mx-3">
                        This page: {sort_by}
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <div style={{cursor: 'pointer', borderRadius: '5px'}} className="navigation nav-link p-1 mt-2"
                onClick={handleClickN(sort_by)}
                >
                    Next Page
                </div>
            </li>
        </ul>
    )
}

export default MovieTabs;