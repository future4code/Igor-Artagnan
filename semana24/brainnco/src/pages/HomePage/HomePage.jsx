import React, { useEffect, useState } from 'react'
import { getLoterias } from '../../services/get'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const HomePage = () => {

    const [loterias, setLoterias] = useState([])
     const [id, setId] = useState('');

    const handleChange = (event) => {
        setId(event.target.value);
    }; 

    useEffect(() => {
        getLoterias(setLoterias)
    }, [])

    return <div>
        HOME
        {console.log(loterias)}
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
           
           {/*  <Select
                value={age}
                onChange={handleChange} 
                label="Age"
            > */}
               {/*  <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>

        </FormControl>
    </div>
}

export default HomePage