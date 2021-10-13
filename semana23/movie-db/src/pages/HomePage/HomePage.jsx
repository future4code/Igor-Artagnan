import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Main, Card, CheckDiv, PageDiv, InputDiv } from './Styled'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MovieByGenre, Movies } from '../../services/Gets';
import MovieCard from '../../components/MovieCard/MovieCard';
import { goToDetails } from '../../route/coordinator'


const HomePage = () => {

    const history = useHistory()
    const [genreValue, setGenreValue] = useState([])
    const [genre, setGenre] = useState([])
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1);

    useEffect(() => {
        MovieByGenre(setGenre)
        Movies(setMovies, page)
    }, [page, genreValue])

    const { results } = movies


    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleChangeCheck = (event) => {
        if (event.target.checked) {
            setGenreValue([...genreValue, event.target.value])
        } else {
            setGenreValue(genreValue.filter((genre) => {
                return genre !== event.target.value
            }))

        }
    }

    let genresFilter = genreValue.map(i => Number(i))

    return (
        <Main>

            <CheckDiv>
                {genre.map((g) => {
                    return <InputDiv>
                        <input
                            onChange={handleChangeCheck}
                            value={g.id}
                            type="checkbox"
                            name={g.name}
                            id={g.id}
                        /> <p>{g.name}</p>&nbsp;&nbsp;

                    </InputDiv>
                })
                }

            </CheckDiv>

            <Card>

                {results && results.filter((movie) => {
                    let genres = movie.genre_ids

                    if (genresFilter.length === 0) {
                        return true
                    }

                    for (let id_genre of genres) {
                        if (genresFilter.includes(id_genre)) {
                            return true
                        }
                    }

                }).map((movie) => {
                    return <MovieCard
                        img={movie.poster_path}
                        title={movie.original_title}
                        details={() => goToDetails(history, movie.id)}
                    />
                })
                }

            </Card>

            <PageDiv>

                <Stack spacing={2}>
                    <Pagination count={500} variant="outlined" page={page} onChange={handleChange} shape="rounded" size="medium" />
                </Stack>

            </PageDiv>

        </Main>

    )
}

export default HomePage