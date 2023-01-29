import {Route, Routes} from 'react-router-dom';
// import { Navbar, Home, CreatePost, PostDetail } from './';
// import { BrowserRouter } from 'react-router-dom';
import React from "react"
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
function App() {
  return (
    <div className="container">
       
          
        <Navbar />
         <Routes>
      
         <Route path="/" element={<Home/>} />
         <Route  path="/post/:postId" element={<PostDetail/>} />
         <Route  path="/create-post" element={<CreatePost/>} />
        </Routes>
         
          </div>
  );
}

export default App;
