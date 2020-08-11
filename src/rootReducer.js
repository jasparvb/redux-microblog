import { ADD_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";

const INITIAL_STATE = {posts: {"1294u0239-12423523": {
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
      const postsCopy = { ...state.posts };
      postsCopy[action.id] = action.post;
      return { ...state, posts: postsCopy };
    }
    case REMOVE_POST: {
      const postsCopy = { ...state.posts };
      delete postsCopy[action.id];
      return { ...state, posts: postsCopy };
    }
    case ADD_COMMENT: {
      const postsCopy = { ...state.posts };
      postsCopy[action.post_id].comments[action.id] = action.comment;
      return { ...state, posts: postsCopy };
    }
    case REMOVE_COMMENT: {
      const postsCopy = { ...state.posts };
      delete postsCopy[action.post_id].comments[action.id];
      return { ...state, posts: postsCopy };
    }
      
    default:
      return state;
  }
}

export default rootReducer;
