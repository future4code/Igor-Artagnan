import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/url'


const FeedPage = () => {
  
  useProtectedPage()
  const posts = useRequestData([], `${BASE_URL}/posts`)

  console.log('POSTS', posts)

  const postCards = posts.map((post)=>{
    return   <PostCard
    key={post.id}
    username={post.username}
    title={post.title}
    body={post.body}
    userVote={post.uservote}
  />
  })

  return <div>
    FeedPage
  

    {postCards}

    


  </div>
}

export default FeedPage