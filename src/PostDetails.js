import React, {useState} from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import NewPostForm from "./NewPostForm";


function PostDetails({posts, savePost}) {
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);
    
    let post = posts.find(post => post.id === id);
    if (!post) {
        return <Redirect to="/" />;
    }

    function toggleEdit() {
        editMode ? setEditMode(false) : setEditMode(true);
    }

    if(editMode) {
        return <NewPostForm addPost={savePost} post={post}/>;
    }
  
    return (
        <div className="PostDetails">
            <div className="container text-left">
                <Link to="/" className="float-right mx-3">
                    <i className="far fa-trash-alt fa-2x text-danger" />
                </Link>
                <Link onClick={toggleEdit} className="float-right">
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