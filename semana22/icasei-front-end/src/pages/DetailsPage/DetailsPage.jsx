import React, { useEffect, useState } from "react"
/* import {videoDetail} from '../../services/Get' */
import { useParams } from 'react-router-dom'



const DetailsPage = () => {

    const { videoId } = useParams()

    return <div>
        DETAIL
        {console.log('ID', videoId)}

    </div>
}

export default DetailsPage