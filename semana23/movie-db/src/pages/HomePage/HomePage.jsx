import React, { useState, useEffect } from 'react'
import { Main } from './Styled'
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MovieByGenre } from '../../services/Gets';

const HomePage = () => {

    const [genreValue, setGenreValue] = useState('');
    const [genre, setGenre] = useState([])

    const handleChange = (event) => {
        setGenreValue(event.target.value);
    }

    useEffect(() => {
        MovieByGenre(setGenre)
    }, [])



    return (
        <Main>
            HOME PAGE
            {console.log('Genre Value',genreValue)}
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
                    {genre.map((g) =>{
                        return  <MenuItem value={g.id}>{g.name}</MenuItem>
                    })}
                    {/* <MenuItem value={'Horror'}>Horror</MenuItem>
                    <MenuItem value={'Drama'}>Drama</MenuItem>
                    <MenuItem value={'Comedy'}>Comedy</MenuItem> */}
                </Select>
                <FormHelperText>Select a genre</FormHelperText>
            </FormControl>

            { console.log('GENRE API', genre) }
        </Main>
        
    )
}

export default HomePage