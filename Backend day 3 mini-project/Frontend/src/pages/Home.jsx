import React from "react";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap m-auto justify-center items-center  w-full h-full gap-5" >
      <Button  variant="contained" endIcon={<SendIcon />} onClick={() => navigate('/create-post')} >
        go to create post
      </Button>
      <Button  variant="contained" endIcon={<SendIcon />} onClick={() => navigate('/feed')}>
        see your post
      </Button>
    </div>
  );
};

export default Home;
