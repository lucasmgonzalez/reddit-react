import React from 'react'

import { useSubredditPosts, REQUEST_TYPES } from '../services/reddit';
import Header from '../components/Header'
import Post from '../components/Post'
import PostList from '../components/PostList'
import Button from '../components/Button'
import Container from '../components/Container'
import Loading from '../components/Loading'

const IndexPage = () => {
  const [request, setRequest] = React.useState(REQUEST_TYPES[0])
  const [posts, postLoading, fetchMore, fetchMoreLoading] = useSubredditPosts(request, 'reactjs')

  const requestChange = React.useCallback(request => () => setRequest(request), [setRequest])

  return (
    <div>
      <Header>
        <Header.Title>
          React<span>JS</span>
        </Header.Title>
      </Header>

      <Container margin="0 auto" width="50%" padding="20px 0">
        {REQUEST_TYPES.map(requestType => (
          <Button 
            key={requestType}
            width="100%" 
            margin="0 2px"
            disabled={postLoading}
            active={request === requestType} 
            onClick={requestChange(requestType)}
          >
            {requestType.toUpperCase()}
          </Button>
        ))}
      </Container>

      <Container padding="0 10% 25px" direction="column">
        {postLoading ? (
          <Loading />
        ) : (
          <PostList>
            {posts.map(post => (
              <PostList.Item key={post.data.name}>
                <Post post={post.data} />
              </PostList.Item>
            ))}
          </PostList>
        )}
        {fetchMoreLoading && <Loading />}
        <Button width="100%" disabled={fetchMoreLoading} onClick={fetchMore}>+ Ver mais</Button>
      </Container>


    </div>
  )
}

export default IndexPage
