import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Alert from "./Alert";

function NewPostForm({addPost, id = null}) {
    const INITIAL_STATE = { 
        title: "",
        description: "",
        body: ""
    };

    const [postData, setPostData] = useState(INITIAL_STATE);
    const history = useHistory();

   
    async function handleSubmit(evt) {
        evt.preventDefault();
        addPost({ ...postData, id: uuid() });
        history.push("/");
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setpostData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  
    return (
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <div>
            <div className="form-group">
                <label htmlFor="title" >Title</label>
                <input 
                    name="title" 
                    type="text"
                    className="form-control" 
                    value={postData.title} 
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description" >Description</label>
                <input 
                    name="description" 
                    type="text"
                    className="form-control" 
                    value={postData.description} 
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="body" >Body</label>
                <input 
                    type="text-area" 
                    name="body" 
                    className="form-control" 
                    value={postData.body} 
                    onChange={handleChange}
                />
            </div>
        </div>

                        {postData.errors.length ? (
                            <Alert type="danger" messages={postData.errors} />
                        ) : null}
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewPostForm;