import React from "react";
import { Link } from "react-router-dom";

function NavHeader() {
    return (
        <div class="jumbotron">
            <h1 class="display-4">Microblog</h1>
            <p class="lead">Get in the Rithm of blogging!</p>
            <hr class="my-4" />
            <Link to="/" className="btn btn-primary mx-2">Blog</Link>
            <Link to="/new" className="btn btn-primary mx-2">Add a New Post</Link>
        </div>
    );
}

export default NavHeader;
