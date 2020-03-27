import React from 'react'
import ClassNames from 'classnames'

const MovieTabs = (props) => {
    const { sort_by, uppdateSortBy} = props;

    const handleClick = value => () => {
            uppdateSortBy(value);
    };

    const p = ClassNames(`nav-link ${sort_by === "popularity.desc" ? "active" : ""}`);
    const r = ClassNames(`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`);
    const v = ClassNames(`nav-link ${sort_by === "vote_average.desc" ? "active" : ""}`)

    return (
        <ul className="tabs nav nav-pills mt-2">
            <li className="nav-item">
                <div style={{cursor: 'pointer'}} className={p}
                onClick={handleClick("popularity.desc")}
                >
                    Popularity.desc
                </div>
            </li>
            <li className="nav-item">
                <div style={{cursor: 'pointer'}} className={r}
                onClick={handleClick("revenue.desc")}
                >
                    Revenue.desc
                </div>
            </li>
            <li className="nav-item">
                <div style={{cursor: 'pointer'}} className={v}
                onClick={handleClick("vote_average.desc")}
                >
                    Vote_average.desc
                </div>
            </li>
        </ul>
    )
}

export default MovieTabs;