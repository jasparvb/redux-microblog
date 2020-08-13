import { ADD_POST, UPDATE_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT, LOAD_TITLES, LOAD_POST, VOTE_POST } from "./actionTypes";
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export function addPostAPI({title, description, body}) {
  return async function(dispatch) {
    let res = await axios.post(`${API_URL}/posts`, {
      title,
      description,
      body
    });
    dispatch(addPost(res.data));
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function updatePostAPI({id, title, description, body}) {
  return async function(dispatch) {
    let res = await axios.put(`${API_URL}/posts/${id}`, {
      title,
      description,
      body
    });
    dispatch(addPost(res.data));
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  };
}

export function removePostAPI(id) {
  return async function(dispatch) {
    await axios.delete(`${API_URL}/posts/${id}`);
    dispatch(removePost(id));
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  };
}

export function addCommentAPI(postId, text) {
  return async function(dispatch) {
    let res = await axios.post(`${API_URL}/posts/${postId}/comments`, {
      text
    });
    dispatch(addComment(postId, res.data));
  };
}

export function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
}

export function removeCommentAPI(postId, id) {
  return async function(dispatch) {
    await axios.delete(`${API_URL}/posts/${postId}/comments/${id}`);
    dispatch(removeComment(postId, id));
  };
}

export function removeComment(postId, id) {
  return {
    type: REMOVE_COMMENT,
    postId,
    id
  };
}

export function getTitlesAPI() {
  return async function(dispatch) {
    let res = await axios.get(`${API_URL}/posts`);
    dispatch(gotTitles(res.data));
  };
}

export function gotTitles(titles) {
  return {
    type: LOAD_TITLES,
    titles
  };
}

export function getPostAPI(postId) {
  return async function(dispatch) {
    let res = await axios.get(`${API_URL}/posts/${postId}`);
    dispatch(gotPost(res.data));
  };
}

export function gotPost(post) {
  return {
    type: LOAD_POST,
    post
  };
}

export function voteAPI(postId, direction) {
  return async function(dispatch) {
    let res = await axios.post(`${API_URL}/posts/${postId}/vote/${direction}`);
    let resPost = await axios.get(`${API_URL}/posts/${postId}`);
    dispatch(votePost(resPost.data, res.data.votes));
  };
}

export function votePost(post, votes) {
  return {
    type: VOTE_POST,
    post,
    votes
  };
}
