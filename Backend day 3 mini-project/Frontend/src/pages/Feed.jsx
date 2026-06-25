import React, { useEffect, useState } from "react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    // {
    //     _id: "1",
    //     image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     caption: "Beutiful scanery",
    // }
  ]);

  const handleDelete = async (id) => {
    try{
        axios.delete(`https://backend-1-cvbd.onrender.com/posts/${id}`)
      }catch(err){
        alert('Error deleting post: ', err)
      }
  }
  useEffect(() => {
    axios.get("https://backend-1-cvbd.onrender.com/posts").then((res) => {
      setPosts(res.data.posts);
    });

  }, [handleDelete]);

  
  
  return (
    <section className="feed-section">
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => navigate("/create-post")}
      >
        go to create post
      </Button>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
            <div className="w-full  justify-end flex flex-wrap ">
              <Button onClick={() => handleDelete(post._id)} className="material-ui-button" variant="contained" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            </div>
          </div>
        ))
      ) : (
        <h1>No posts available</h1> 
      )}
    </section>
  );
};

export default Feed;
