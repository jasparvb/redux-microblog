import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import PostDetails from "./PostDetails";

function Routes({addPosts, posts}) {
    return (
        <Switch>
        <Route path="/" exact>
        </Route>
        <Route path="/:id" exact>
            <PostDetails posts={posts} />
        </Route>
        <Route path="/new" exact>
            <NewPostForm addPosts={addPosts} />
        </Route>
        <Redirect to="/" />
        </Switch>
    );
}

export default Routes;
