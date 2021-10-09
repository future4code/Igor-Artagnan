import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Main, Card, CheckDiv, PageDiv } from './Styled'
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
    //transforma a array de strings em números
    let genresFilter = genreValue.map(i => Number(i))

    //Método que compara se uma array contem algo da outra
    //let isFounded = arr1.some( ai => arr2.includes(ai) )

    /*  const renderVideos = () => {
         if (genresFilter.length === 0) {
             results && results.map((movie) => {
                 return <MovieCard
                     img={movie.poster_path}
                     title={movie.original_title}
                     details={() => goToDetails(history, movie.id)}
                 />
             })
         } else {
             results && results.filter((x) => {
                 return  x.genre_ids === genreValue
             }).map((x) => {
                 return <MovieCard
                     img={x.poster_path}
                     title={x.original_title}
                     details={() => goToDetails(history, x.id)}
                 />
             })
         }
     } */


    return (
        <Main>

            <CheckDiv>
                {genre.map((g) => {
                    return <div>
                        <input
                            onChange={handleChangeCheck}
                            value={g.id}
                            type="checkbox"
                            name={g.name}
                            id={g.id}
                        /> {g.name}&nbsp;&nbsp;
                    </div>
                })
                }

            </CheckDiv>

            <Card>
                {results && results.map((movie) => {
                    let isFounded = movie.genre_ids.some(ai => genresFilter.includes(ai))
                    return <MovieCard
                        img={movie.poster_path}
                        title={movie.original_title}
                        details={() => goToDetails(history, movie.id)}
                    />
                })}

                {/*  {renderVideos()} */}

            </Card>
            {console.log('Filmes', movies)}
            {console.log('Valor do filtro', genreValue)}
            {console.log('Paginação', page)}
            {console.log('Array numeros', genresFilter)}




            <PageDiv>
                <Stack spacing={2}>
                    <Pagination count={500} page={page} onChange={handleChange} />
                </Stack>

            </PageDiv>

        </Main>


    )
}

export default HomePage