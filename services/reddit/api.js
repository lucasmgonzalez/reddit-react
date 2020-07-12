import axios from 'axios';

import {retrieveAccessToken} from './authorization'

let access_token;
let expires_in;

const authenticate = async () => {
  const response = await retrieveAccessToken()
  
  if (response.status === 200 && response.data) {
    access_token = response.data.access_token;
    expires_in = Date.now() + response.data.expires_in
  }
}

const jsonToQueryString = json => Object.keys(json).map(key => json[key] && `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`).join('&')

const redditClient = axios.create({
  baseURL: 'https://oauth.reddit.com',
});

const makeRequest = async (method, uri, data, options = {}) => {
  if (!access_token || Date.now() > expires_in) {
    await authenticate()
  }

  const requestOptions = {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `bearer ${access_token}`
    }
  };
  const params = method === 'get' ? [uri, requestOptions] : [uri, data, requestOptions];

  return await redditClient[method.toLowerCase()](...params)
}

const reddit = {
  get: (uri, data, options) => makeRequest('get', `${uri}?${jsonToQueryString(data)}`, options),
  post: (uri, data, options) => makeRequest('post', uri, data, options),
  put: (uri, data, options) => makeRequest('put', uri, data, options),
  delete: (uri, data, options) => makeRequest('delete', uri, data, options)
}

// Exported methods
export const fetchSubredditHot = async (subreddit, after) => {
  const response = await reddit.get(`/r/${subreddit}/hot`, {after})

  return response.data.data
}

export const fetchSubredditNew = async (subreddit, after) => {
  const response = await reddit.get(`/r/${subreddit}/new`, {after})

  return response.data.data
}

export const fetchSubredditRising = async (subreddit, after) => {
  const response = await reddit.get(`/r/${subreddit}/rising`, {after})

  return response.data.data
}
