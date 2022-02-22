import axios from 'axios'

export const loadPostsAPI = async () => 
    await axios.get('http://localhost:3001/posts')

export const createPostAPI = async (post) => 
    await axios.post('http://localhost:3001/posts', post)

export const deletePostAPI = async (postId) => 
    await axios.delete(`http://localhost:3001/posts/${postId}`)

