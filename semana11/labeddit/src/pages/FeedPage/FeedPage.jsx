import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/url'


const FeedPage = () => {
  
  useProtectedPage()
  const posts = useRequestData([], `${BASE_URL}/posts`)

  console.log('POSTS', posts)

  return <div>
    FeedPage
  {/*   <PostCard
      username={'Michale Graves'}
      body={"Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead"}
      userVote={'3'}
    /> */}

    


  </div>
}

export default FeedPage