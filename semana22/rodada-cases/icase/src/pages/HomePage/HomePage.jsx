import React, { useState } from "react"
import { searchVideo } from "../../services/Get"

const HomePage = () => {

    const [data, setData] = useState()
    const search = 'marshall jcm 800'

   

    return <div>
        {
            searchVideo(setData, search),
            console.log('DATA', data)
        }
    </div>
}

export default HomePage