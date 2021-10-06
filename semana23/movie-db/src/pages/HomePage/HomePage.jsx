import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Main, Card } from './Styled'
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MovieByGenre, Movies } from '../../services/Gets';
import MovieCard from '../../components/MovieCard/MovieCard';
import { goToDetails } from '../../route/coordinator'

const HomePage = () => {

    const history = useHistory()
    const [genreValue, setGenreValue] = useState('')
    const [genre, setGenre] = useState([])
    const [movies, setMovies] = useState([])

    const handleChange = (event) => {
        setGenreValue(event.target.value);
    }

    useEffect(() => {
        MovieByGenre(setGenre)
        Movies(setMovies)
    }, [])



    return (
        <Main>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={genreValue}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    {genre.map((g) => {
                        return <MenuItem value={g.id}>{g.name}</MenuItem>
                    })}
                </Select>
                <FormHelperText>Select a genre</FormHelperText>
            </FormControl>
            <Card>
            {movies.map((movie) => {
                return <MovieCard
                    img={movie.poster_path}
                    title={movie.original_title}
                    details={() => goToDetails(history, movie.id)}
                />
            })}
            </Card>
            {console.log('Filmes', movies)}
            {console.log('Valor do filtro', genreValue)}

        </Main>

    )
}

export default HomePage