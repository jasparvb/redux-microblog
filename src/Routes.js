import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import PostDetails from "./PostDetails";
import PostList from "./PostList";

function Routes({addPost, savePost, deletePost, posts}) {
    return (
        <Switch>
            <Route path="/" exact>
                <PostList posts={posts} />
            </Route>
            <Route path="/new" exact>
                <NewPostForm addPost={addPost} />
            </Route>
            <Route path="/:id" exact>
                <PostDetails savePost={savePost} deletePost={deletePost} posts={posts} />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;
