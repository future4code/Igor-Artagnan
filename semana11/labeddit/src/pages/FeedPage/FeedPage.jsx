import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import { goToPostPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/url'
import { useHistory, /* useEffect */ } from 'react-router-dom'
import { MainContainer } from './styled'
import { changePostVote } from '../../services/put'
import { createPostVote } from '../../services/create'
import CreatePostForm from './CreatePostForm';
import useForm from '../../hooks/useForm'

const FeedPage = () => {

  useProtectedPage()

  const posts = useRequestData([], `${BASE_URL}/posts`)
  const history = useHistory()
  const [form] = useForm({direction: "" })


  const onClickCard = (id) => {
    goToPostPage(history, id)
  }

  const onClickCreate = (id) => {
    console.log('UPVOTE')
    createPostVote(id, form)
  }

  const onClickChange = (id) => {
    console.log('DOWNVOTE')
    changePostVote(id, form)

  }

  
  const postCards = posts.map((post) => {
    return <PostCard
      onClick={() => onClickCard(post.id)}
      key={post.id}
      username={post.username}
      title={post.title}
      body={post.body}
      voteSum={post.voteSum}
      commentCount={post.commentCount}
      onClickCreate={() => onClickCreate(post.id)}
      onClickChange={() => onClickChange(post.id)}
    />
  })

  return <MainContainer>

    <CreatePostForm />

    {postCards}


  </MainContainer>
}

export default FeedPage