import { 
  ADD_POST, 
  UPDATE_POST, 
  REMOVE_POST, 
  ADD_COMMENT, 
  REMOVE_COMMENT,  
  LOAD_POST 
} from "../actionTypes";


function rootReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_POST: {
      return {
        ...state,
        [action.post.id]: action.post
      };
    }
    case ADD_POST: {
      return {
        ...state,
        [action.post.id]: { 
          ...action.post,
          comments: []
        }
      };
    }
    case UPDATE_POST: {
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments
        }
      }
    };
    case REMOVE_POST: {
      const postsCopy = { ...state };
      delete postsCopy[action.id];
      return postsCopy;
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
