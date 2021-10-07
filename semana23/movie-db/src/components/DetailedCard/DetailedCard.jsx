import React from "react";

const DetailedCard = (props) => {
    return <div>
        <h1>{props.name}</h1>
        <h3>{props.overview}</h3>
        <h4>{props.vote_average}</h4>
        <a href={props.homepage}>Website</a>
    </div>
}

export default DetailedCard