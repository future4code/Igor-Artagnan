import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import { goToPostPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/url'
import { useHistory, /* useEffect */ } from 'react-router-dom'
import { MainContainer } from './styled'
import CreatePostForm from './CreatePostForm';


const FeedPage = () => {

  useProtectedPage()

  const posts = useRequestData([], `${BASE_URL}/posts`)
  const history = useHistory()

  const onClickCard = (id) => {
    goToPostPage(history, id)
  }

  console.log('POSTS', posts)

  const postCards = posts.map((post) => {
    return <PostCard
      onClick={() => onClickCard(post.id)}
      key={post.id}
      username={post.username}
      title={post.title}
      body={post.body}
      userVote={post.uservote}
    />
  })

  return <MainContainer>

    <CreatePostForm/>

    {postCards}


  </MainContainer>
}

export default FeedPage