import React, { useState } from "react"
import { searchVideo } from "../../services/Get"

const HomePage = () => {

    const [data, setData] = useState()
    const search = 'nekroterio'

   

    return <div>
        {
            searchVideo(setData, search),
            console.log('DATA', data)
        }
    </div>
}

export default HomePage