import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTitlesFromAPI } from "./actions"

function PostList() {
  const titles = useSelector(state => state.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTitles() {
      await dispatch(getTitlesFromAPI());
      setIsLoading(false);
    }

    if (isLoading) {
      getTitles();
    }
    
  }, [dispatch, isLoading]);
  
  if (isLoading) return <h3><b>Loading...</b></h3>;
  
  if (!isLoading && !titles.length) return <h1>You don't have any posts yet</h1>;
  
  const postCards = titles.map(title => (
    <div key={title.id} className="Card card my-2" >
      <div className="card-body">
        <Link to={`/${title.id}`}>
          <h3 className="card-title d-flex justify-content-between">
            {title.title}
          </h3>
        </Link>            
        <p>{title.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="PostList">
      <div className="container text-left">
        {postCards}
      </div>
    </div>
  );
}

export default PostList;