import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url';
import CommentsCard from '../../components/ComentsCard/ComentsCard';
import PostCard from '../../components/PostCard/PostCard';


const PostPage = () => {
  useProtectedPage()

  const params = useParams()

  const postComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
  const post = useRequestData([], `${BASE_URL}/posts`)

  const thisPost = post.filter((post) => {
    return post.id === params.id
  }).map((post) => {
    return <PostCard
      username={post.username}
      title={post.title}
      body={post.body}
      userVote={post.uservote}
    />
  })

  const mapedComments = postComments.map((comment) => {
    return <CommentsCard
      key={comment.id}
      username={comment.username}
      body={comment.body}
      voteSum={comment.voteSum}
    />

  })

  return <div>
    
    {thisPost}
    {mapedComments}
  
  </div>
}

export default PostPage