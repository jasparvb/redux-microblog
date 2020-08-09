import React from "react";
import { Redirect, useParams, Link } from "react-router-dom";


function PostDetails({posts}) {
    const { id } = useParams();
    let post = posts.find(post => post.id === +id);
    if (!post) return <Redirect to="/" />;
  
    return (
        <div className="PostDetails">
            <div className="container text-left">
                <Link to="/" className="float-right mx-3">
                    <i className="far fa-trash-alt fa-2x text-danger" />
                </Link>
                <Link to="/" className="float-right">
                    <i className="far fa-edit fa-2x text-primary" />
                </Link>
                <h3 className="card-title d-flex justify-content-between">
                    {post.title}
                </h3>
                <h4>{post.description}</h4>
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default PostDetails;