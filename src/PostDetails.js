import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import Comment from "./PostComment";
import PostCommentForm from "./PostCommentForm";
import { useSelector, useDispatch } from "react-redux";
import { getPostAPI, removePostAPI, addCommentAPI, removeCommentAPI } from './actions';


function PostDetails() {
    const postId = Number(useParams().postId);
    const post = useSelector(state => state.posts[postId]);
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const history = useHistory();
    
    //only load post if it's not in state already
    useEffect(() => {
        async function getPost(){
            dispatch(getPostAPI(postId))
        }
        if(!post) {
            getPost();
        }
    }, [dispatch, postId, post]);

    if (!post) {
        return <h3><b>Loading...</b></h3>;
    }

    function handleDelete() {
        dispatch(removePostAPI(postId));
        history.push("/");
    }

    function addNewComment(text) {
        dispatch(addCommentAPI(postId, text));
    }

    function deleteComment(commentId) {
        dispatch(removeCommentAPI(postId, commentId));
    }

    function toggleEdit() {
        editMode ? setEditMode(false) : setEditMode(true);
    }

    if(editMode) {
        return <NewPostForm postId={postId} post={post} />;
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
                {post.comments.map(comment => 
                  <Comment 
                    key={comment.id} 
                    id={comment.id} 
                    text={comment.text}
                    deleteComment={deleteComment}
                  />
                )}
                <PostCommentForm addNewComment={addNewComment} />
            </div>
        </div>
    );
}

export default PostDetails;