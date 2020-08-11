import React, {useState} from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import Comment from "./PostComment";
import PostCommentForm from "./PostCommentForm";
import { useSelector, useDispatch } from "react-redux";
import { removePost, addComment, removeComment } from './actions';


function PostDetails() {
    const { id } = useParams();
    const post = useSelector(state => state.posts[id]);
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const history = useHistory();

    if (!post) {
        return <Redirect to="/" />;
    }

    function handleDelete() {
        dispatch(removePost(id));
        history.push("/");
    }

    function addNewComment(commentId, text) {
        dispatch(addComment(id, commentId, text));
    }

    function deleteComment(commentId) {
        dispatch(removeComment(id, commentId));
    }

    function toggleEdit() {
        editMode ? setEditMode(false) : setEditMode(true);
    }

    if(editMode) {
        return <NewPostForm postId={id} post={post} />;
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
                {Object.keys(post.comments).map(cId => 
                  <Comment 
                    key={cId} 
                    id={cId} 
                    text={post.comments[cId].text}
                    deleteComment={deleteComment}
                  />
                )}
                <PostCommentForm addNewComment={addNewComment} />
            </div>
        </div>
    );
}

export default PostDetails;