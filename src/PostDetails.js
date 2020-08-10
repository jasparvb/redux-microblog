import React, {useState} from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";


function PostDetails({posts, savePost, deletePost}) {
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();

    let post = posts.find(post => post.id === id);
    if (!post) {
        return <Redirect to="/" />;
    }
    function handleDelete() {
        deletePost(id);
        history.push("/");
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
                <button onClick={handleDelete} className="float-right mx-3">
                    <i className="far fa-trash-alt fa-2x text-danger" />
                </button>
                <button onClick={toggleEdit} className="float-right">
                    <i className="far fa-edit fa-2x text-primary" />
                </button>
                <h3 className="card-title d-flex justify-content-between">
                    {post.title}
                </h3>
                <h4>{post.description}</h4>
                <p>{post.body}</p>
                <hr/>
                <h3>Comments</h3>
                {post.comments.map(c => <p key={c.id}>{c.text}</p>)}
            </div>
        </div>
    );
}

export default PostDetails;