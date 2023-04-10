import axios from 'axios'

const TOKEN = '<YOUR_TOKEN_HERE>'

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: TOKEN,
  },
})
