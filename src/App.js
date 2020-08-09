import React, { useState, useEffect } from "react";
import './App.css';
import NavHeader from './NavHeader';
import Routes from './Routes';

function App() {
  const INITIAL_STATE = [{
    id: "12fasdjhkfa-12312312",
    title: "This is a Blog Title",
    description: "This is the subtitle",
    body: "Hello world lskjrosiej lrskjelr"
  }];

  const [posts, setPosts] = useState(INITIAL_STATE);
  
  const addPost = (post) => {
    setPosts([...posts, post]);
  }

  return (
    <div className="App">
      <NavHeader />
      <Routes posts={posts} addPost={addPost} />
    </div>
  );
}

export default App;
