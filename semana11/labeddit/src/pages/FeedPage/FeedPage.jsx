import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url'
import {MainContainer} from './styled'


const FeedPage = () => {

  useProtectedPage()
  const posts = useRequestData([], `${BASE_URL}/posts`)


  const postCards = posts.map((post) => {
    return <PostCard
      onClick={() => null}
      key={post.id}
      username={post.username}
      title={post.title}
      body={post.body}
      userVote={post.uservote}
    />
  })

  return <MainContainer>

    

    {postCards}


  </MainContainer>
}

export default FeedPage