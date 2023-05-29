import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://test-candidaturas-front-end.onrender.com',
})

export default instance
