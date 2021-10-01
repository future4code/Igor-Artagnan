import React, { useEffect, useState } from "react"
import { videoDetail } from '../../services/VideoDetail'
import { useParams } from 'react-router-dom'
import DetailedCard from "../../components/DetailedCard/DetailedCard"


const DetailsPage = () => {

    const [data, setData] = useState([])
    const { videoId } = useParams()

    useEffect(() => {
        videoDetail(setData, videoId)
    }, [])

    return (<div>

        {console.log(data)}
 
         {data ? data.map((video) => {
            return <DetailedCard
                title={video.snippet.title}
                thumbnails={video.snippet.thumbnails.medium.url}
                channelTitle={video.snippet.channelTitle}
                description={video.snippet.description}
                viewCount={video.statistics.viewCount}

            />
        }) : <p>carregando</p>} 
 

    </div>
    )}

export default DetailsPage