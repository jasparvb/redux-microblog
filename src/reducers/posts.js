import { 
  ADD_POST, 
  UPDATE_POST, 
  REMOVE_POST, 
  ADD_COMMENT, 
  REMOVE_COMMENT,  
  LOAD_POST,
  VOTE_POST 
} from "../actionTypes";


function rootReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: { 
          ...action.post,
          comments: []
        }
      };
    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments
        }
      };
    case REMOVE_POST: {
      const postsCopy = { ...state };
      delete postsCopy[action.id];
      return postsCopy;
    }
    case ADD_COMMENT:
      return {
          ...state,
          [action.postId]: { ...state[action.postId],
            comments: [ ...state[action.postId].comments, action.comment ]
        }
      };
    case REMOVE_COMMENT:
      return {
          ...state,
          [action.postId]: { ...state[action.postId],
            comments: state[action.postId].comments.filter(c => c.id !== action.id)
        }
      };  
    case VOTE_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };  
      default:
      return state;
  }
}

export default rootReducer;
