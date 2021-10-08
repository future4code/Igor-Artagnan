import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import DetailedCard from '../../components/DetailedCard/DetailedCard'
import { MovieDetail } from '../../services/Gets'


const MoviePage = () => {

    const [movie, setMovie] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        MovieDetail(setMovie, movieId)
    }, [])

    return (
        <div>
            <DetailedCard
                name={movie.original_title}
                title={movie.title}
                overview={movie.overview}
                vote_average={movie.vote_average}
                homepage={movie.homepage}

            />


        </div>
    )
}

export default MoviePage