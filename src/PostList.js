import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function PostList() {
    const posts = useSelector(state => state.posts);
    if (!Object.keys(posts).length) return <h1>You don't have any posts yet</h1>;
    
    const postCards = Object.keys(posts).map(id => (
            <div key={id} className="Card card my-2" >
            <div className="card-body">
                <Link to={`/${id}`}>
                    <h3 className="card-title d-flex justify-content-between">
                        {posts[id].title}
                    </h3>
                </Link>            
                <p>{posts[id].description}</p>
            </div>
        </div>
    ));

    return (
        <div className="PostList">
            <div className="container text-left">
                {postCards}
            </div>
        </div>
    );
}

export default PostList;