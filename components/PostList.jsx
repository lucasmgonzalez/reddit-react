import styled from 'styled-components'

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`

PostList.Item = styled.li`
  border-bottom: 1px solid black;

  &:first-child {
    border-top: 1px solid black;
  }
`

export default PostList
