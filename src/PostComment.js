import React from "react";

function PostComment({id, text, deleteComment}) {
    
    function handleDelete() {
        deleteComment(id)
    }
  
    return (
        <div className="PostComment">
            <div className="container text-left">
                <button onClick={handleDelete} className="float-left mx-3">
                    <i className="far fa-trash-alt text-danger" />
                </button>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default PostComment;