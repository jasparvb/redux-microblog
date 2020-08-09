import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Alert from "./Alert";
import { Link } from "react-router-dom";

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
      setPostData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  
    return (
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-left">
          
            <div className="card">
                <div className="card-body">
                    <h2 className="mb-5">New Post</h2>
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
                            <textarea 
                            name="body" 
                            className="form-control"
                            value={postData.body} 
                            onChange={handleChange}
                            rows="10">
                            </textarea>
                        </div>
                    </div>
                        <button type="submit" className="btn btn-primary float-right ml-3 mt-3">Save</button>
                        <Link to="/" className="btn btn-danger float-right mt-3">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewPostForm;