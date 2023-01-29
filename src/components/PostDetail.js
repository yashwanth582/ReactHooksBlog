import { useState,useEffect } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";
function PostDetail() {
    const [post, setPost] = useState({})
    const {postId}= useParams();
    useEffect(()=> {
      firestore.collection('posts').doc(postId)
      .onSnapshot((Snapshot)=> {
        console.log('snapshot', Snapshot.data())
        setPost(Snapshot.data())
      })
    },[])

    return <div className="post-detail">
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </div>;
      }
    
    export default PostDetail;