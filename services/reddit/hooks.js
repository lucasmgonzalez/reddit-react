import React from 'react'

import {fetchSubredditHot, fetchSubredditNew, fetchSubredditRising} from './api'

export const REQUEST_HOT = 'hot'
export const REQUEST_NEW = 'news'
export const REQUEST_RISING = 'rising'

export const REQUEST_TYPES  = [REQUEST_HOT, REQUEST_NEW, REQUEST_RISING]

export const useSubredditPosts = (request, subreddit) => {
  const [posts, setPosts] = React.useState([])
  const [after, setAfter] = React.useState(null)
  const [loading, setLoading] = React.useState(true);
  const [fetchMoreLoading, setFetchMoreLoading] = React.useState(false);

  const fetchFunction = {
    [REQUEST_NEW]: fetchSubredditNew,
    [REQUEST_HOT]: fetchSubredditHot,
    [REQUEST_RISING]: fetchSubredditRising
  }

  React.useEffect(() => {
    setLoading(true)
    
    fetchFunction[request](subreddit).then(data => {
      setPosts(data.children)
      setAfter(data.after)
      setLoading(false)
    })
  }, [request, subreddit]);

  const fetchMore = React.useCallback(() => {
    setFetchMoreLoading(true)
    
    fetchFunction[request](subreddit, after).then(data => {
      setPosts(oldPosts => [...oldPosts, ...data.children])
      setAfter(data.after)
      setFetchMoreLoading(false)
    })
  }, [request, subreddit, after])

  return [posts, loading, fetchMore, fetchMoreLoading];
}
