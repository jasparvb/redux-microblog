import { ADD_POST, UPDATE_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";

const INITIAL_STATE = {
  posts: {"1294u0239-12423523": {
    title: "This is a Blog Title",
    description: "This is the subtitle",
    body: "Hello world lskjrosiej lrskjelr",
    comments: {
      "2342340-23dslkj3lkj": {text: "This is a cool blog"},
      "2342340-23dslkj3l323": {text: "Messi is the GOAT"},
      "2342340-23dslkj3l53561": {text: "Awesome post"}
    }
  }
}};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: action.post
       }};
    }
    case UPDATE_POST: {
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: action.post
       }};
    }
    case REMOVE_POST: {
      const postsCopy = { ...state.posts };
      delete postsCopy[action.id];
      return { ...state, posts: postsCopy };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {...state.posts[action.postId],
            comments: {...state.posts[action.postId].comments, [action.id]: action.comment}
          }
        }
      };
    }
    case REMOVE_COMMENT: {
      const commentsCopy = { ...state.posts[action.postId].comments };
      delete commentsCopy[action.id];
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {...state.posts[action.postId],
            comments: commentsCopy
          }
        }
      };
    }
      
    default:
      return state;
  }
}

export default rootReducer;
