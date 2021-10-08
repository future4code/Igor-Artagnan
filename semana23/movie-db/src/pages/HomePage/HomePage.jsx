import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Main, Card, CheckDiv, PageDiv } from './Styled'
/* import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; */
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MovieByGenre, Movies } from '../../services/Gets';
import MovieCard from '../../components/MovieCard/MovieCard';
import { goToDetails } from '../../route/coordinator'

const HomePage = () => {

    const history = useHistory()
    const [genreValue, setGenreValue] = useState('')
    const [genre, setGenre] = useState([])
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1);

    useEffect(() => {
        MovieByGenre(setGenre)
        Movies(setMovies, page)
    }, [page])

    const { results } = movies

    const handleChange = (event, value) => {
        setPage(value);
    };




    return (
        <Main>
            {/*  <FormControl sx={{ m: 1, minWidth: 120 }}>
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
            </FormControl> */}
            <CheckDiv>
                {/*  {genre.map((g) => {
                    return <div>
                        <input
                            onChange={handleChange}
                            value={g.id}
                            type="checkbox"
                            name={g.name}
                        /> {g.name}&nbsp;&nbsp;
                    </div>

                })

                } */}
            </CheckDiv>

            <Card>
                {results && results.map((movie) => {
                    return <MovieCard
                        img={movie.poster_path}
                        title={movie.original_title}
                        details={() => goToDetails(history, movie.id)}
                    />
                })}
            </Card>
            {console.log('Filmes', movies)}
            {console.log('Valor do filtro', genreValue)}
            {console.log('Paginação', page)}

            <PageDiv>
                <Stack spacing={2}>
                    <Pagination count={500} page={page} onChange={handleChange} />
                </Stack>

            </PageDiv>

        </Main>

    )
}

export default HomePage