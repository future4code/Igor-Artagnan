import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url';


const PostPage = () => {
  useProtectedPage()

  const params = useParams()
  console.log(params)

  const postComents = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

  console.log('COMENTARIOS', postComents)

  return <div>
    PostPage
  </div>
}

export default PostPage