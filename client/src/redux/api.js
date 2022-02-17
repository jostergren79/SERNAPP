import axios from 'axios'

export const loadPostsAPI = async () => 
    await axios.get('http://localhost:3001/posts')

