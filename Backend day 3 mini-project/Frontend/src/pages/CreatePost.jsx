import React from 'react'
import axios from 'axios'
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    
    axios.post('http://localhost:3000/create-post', formData)
    .then((res) => {
      navigate('/feed')
    })
    .catch((err) => {
      alert("Error creating post")  
    })
  }
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" placeholder='Enter caption' name='caption' required />
            <button type='submit'>submit</button>
        </form>
        <Button variant="contained" endIcon={<SendIcon />} onClick={() => navigate('/feed')}>
        see your post
      </Button>
    </section>
  )
}

export default CreatePost
