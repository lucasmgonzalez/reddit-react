import axios from 'axios'

const CLIENT_ID = process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_REDDIT_CLIENT_SECRET

export const retrieveAccessToken = async () => {
  const formData = new FormData()
  formData.append('grant_type', 'client_credentials')
  // formData.append('scope', 'read')

  const httpAuthToken = `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`

  const response = await axios.post(
    'https://www.reddit.com/api/v1/access_token', 
    formData, 
    {
      headers: {
        'Authorization': httpAuthToken
      }
    }
  )

  return response;
}
