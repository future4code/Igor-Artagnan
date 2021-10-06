import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { MovieDetail } from '../../services/Gets'


const MoviePage = () => {

    const [movie, setMovie] = useState([])
    const { movieId } = useParams()

    useEffect(()=>{
        MovieDetail(setMovie, movieId)
    }, [])

    return (
        <div>
            
            
        </div>
    )
}

export default MoviePage