import React from 'react'
import styled from 'styled-components'

import BaseContainer from '../Container'
import ellapsedTime from './ellapsedTime'

const Container = styled(BaseContainer)`
  padding: 10px 0;
  
  color: black;
  text-decoration: none;

  &:hover {
    background-color: rgba(0,0,0,0.1)
  }
`

const Thumbnail = styled.div`
  display: flex;
  flex: 0 0 100px;
  align-items: center;

  img {
    width: 100%;
  }
`

const Content = styled.div`
  padding: 0 15px;
`

const Title = styled.h2`
  margin: 0 0 8px;

  font-size: 2.0rem;
`

const Submitted = styled.p`
  margin: 0 0 8px;
  font-size: 1.4rem;
`

const Author = styled.span`
  color: ${({theme}) => theme.colors.primary};
` 

const Domain = styled.p`
  display: inline-block;
  margin: 0;
  border-bottom: 1px dotted currentColor;
  font-size: 1.2rem;
`

const thumbnailSrc = src => !src || src === 'self' || src === 'default' 
  ? 'http://www.fillmurray.com/140/140' 
  : src

const Post = ({post}) => {
  return (
    <Container as="a" href={post.url}>
      <Thumbnail>
        <img src={thumbnailSrc(post.thumbnail)} alt=""/>
      </Thumbnail>
      <Content>
        <Title>{post.title}</Title>
        <Submitted> enviado a {ellapsedTime(post.created_utc)} por <Author>{post.author}</Author></Submitted>
        <Domain>{post.domain}</Domain>
      </Content>
    </Container>
  )
}

export default Post;
