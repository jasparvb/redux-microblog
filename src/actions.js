import { ADD_POST, UPDATE_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";

export function addPost(id, post) {
    return {
        type: ADD_POST,
        id,
        post
    };
}

export function updatePost(id, post) {
    return {
        type: UPDATE_POST,
        id,
        post
    };
}

export function removePost(id) {
    return {
        type: REMOVE_POST,
        id
    };
}

export function addComment(postId, id, comment) {
    return {
        type: ADD_COMMENT,
        postId,
        id,
        comment
    };
}

export function removeComment(postId, id) {
    return {
        type: REMOVE_COMMENT,
        postId,
        id
    };
}