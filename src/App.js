import React, { useState } from "react";
import './App.css';
import NavHeader from './NavHeader';
import Routes from './Routes';

function App() {
  const INITIAL_STATE = [{
    id: "12fasdjhkfa-12312312",
    title: "This is a Blog Title",
    description: "This is the subtitle",
    body: "Hello world lskjrosiej lrskjelr",
    comments: [
      {id: "2342340-23dslkj3lkj", text:"This is a cool blog"},
      {id: "2342340-23dslkj3l323", text:"Messi is the GOAT"},
      {id: "2342340-23dslkj3l53561", text:"Awesome post"},
    ]
  }];

  const [posts, setPosts] = useState(INITIAL_STATE);
  
  function addPost(post) {
    setPosts([...posts, post]);
  }

  function savePost(post) {
    let otherPosts = posts.filter(p => p.id !== post.id);
    setPosts([...otherPosts, post]);
  }

  function deletePost(id) {
    let otherPosts = posts.filter(p => p.id !== id);
    setPosts([...otherPosts]);
  }

  function addComment(post_id, comment) {
    let otherPosts = posts.filter(p => p.id !== post_id);
    let post = posts.find(p => p.id === post_id);
    post.comments.push(comment);
    
    setPosts([...otherPosts, post]);
  }

  function deleteComment(post_id, id) {
    let otherPosts = posts.filter(p => p.id !== post_id);
    let post = posts.find(p => p.id === post_id);
    let comments = post.comments.filter(c => c.id !== id);
    let newPost = {...post, comments};
    
    setPosts([...otherPosts, newPost]);
  }

  return (
    <div className="App">
      <NavHeader />
      <Routes 
        posts={posts} 
        addPost={addPost} 
        savePost={savePost} 
        deletePost={deletePost}
        addComment={addComment}
        deleteComment={deleteComment}
      />
    </div>
  );
}

export default App;
