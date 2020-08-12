import React, { useState } from "react";

function NewPostForm({addNewComment}) {
    
    const INITIAL_STATE = { 
        text: ""
    };

    const [text, setText] = useState(INITIAL_STATE);

    function handleSubmit(evt) {
        evt.preventDefault();
        addNewComment(text.text);
        setText(INITIAL_STATE);
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setText(fData => ({
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
                        value={text.text} 
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary float-left mt-1">Add</button>
            </form>
        </div>
    );
}

export default NewPostForm;