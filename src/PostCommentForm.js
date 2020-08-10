import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewPostForm({post_id, addComment}) {
    
    const INITIAL_STATE = { 
        text: ""
    };

    const [commentData, setCommentData] = useState(INITIAL_STATE);

    async function handleSubmit(evt) {
        evt.preventDefault();
        addComment(post_id, { ...commentData, id: uuid() });
        setCommentData(INITIAL_STATE);
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setCommentData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  
    return (
        <div className="NewPostForm container text-left mt-3">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        name="text" 
                        type="text"
                        className="form-control" 
                        placeholder="New Comment"
                        value={commentData.text} 
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary float-left mt-1">Add</button>
            </form>
        </div>
    );
}

export default NewPostForm;