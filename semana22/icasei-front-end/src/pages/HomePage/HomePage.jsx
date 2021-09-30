import React, { useState, useEffect } from "react"
import { searchVideo } from "../../services/Get"
import { AiOutlineSearch } from 'react-icons/ai'
import { SearchDiv } from "./styled"
import VideoCard from "../../components/VideoCard/VideoCard"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DetailedCard from "../../components/DetailedCard/DetailedCard"



const HomePage = () => {

    const [data, setData] = useState()
    const [search, setSearch] = useState('')

     
        
    

    const setValue = (e) => {
        setSearch(e.target.value)
    }

    console.log(search)
    console.log(data[0].snippet.thumbnails)

    /* const videos = data.map((video) => {
        return <VideoCard
        thumbnails={video.items.snippet.thumbnails.default.url}
        />
    }) */

    return (
        <div>

            <SearchDiv>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField
                        fullWidth label="Pesquisar"
                        id="Pesquisar"
                        value={search}
                        onChange={setValue}
                    />
                </Box>
                <button
                onClick={() => searchVideo(setData, search)}
                >
                    <AiOutlineSearch />
                </button>
            </SearchDiv>
                                

        </div>
    )
}

export default HomePage