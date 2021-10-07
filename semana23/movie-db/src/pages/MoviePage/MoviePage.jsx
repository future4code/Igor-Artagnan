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
            {/* movie.map((detail) => {
                return  */<DetailedCard
                    name={movie.original_title}
                    overview={movie.overview}
                    vote_average={movie.overview}
                    homepage={movie.homepage}

                />
            })}

        </div>
    )
}

export default MoviePage