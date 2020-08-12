import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import PostDetails from "./PostDetails";
import PostList from "./PostList";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <PostList />
            </Route>
            <Route path="/new" exact>
                <NewPostForm />
            </Route>
            <Route path="/:postId" exact>
                <PostDetails />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;
