import React from "react";
import { Link } from "react-router-dom";


function PostList({posts}) {
    if (!posts.length) return <h1>You don't have any posts yet</h1>;
  
    return (
        <div className="PostList">
            <div className="container text-left">
                {posts.map(p => 
                    <div key={p.id} className="Card card my-2" >
                        <div className="card-body">
                            <Link to={`/${p.id}`}>
                                <h3 className="card-title d-flex justify-content-between">
                                    {p.title}
                                </h3>
                            </Link>            
                            <p>{p.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostList;