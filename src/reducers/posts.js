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
        posts: {
          ...state.posts,
          [action.post.id]: { 
            ...action.post,
            comments: []
          }
        }, titles: [
          ...state.titles,
          { id: action.post.id, 
            title: action.post.title, 
            description: action.post.description,
            votes: action.post.votes
          }
        ]
      };
    }
    case UPDATE_POST: {
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: action.post
        }, titles: 
         state.titles.filter(title => title.id !== action.post.id ? title :
          { id: action.post.id, 
          title: action.post.title, 
          description: action.post.description,
          votes: action.post.votes
         }
        )
      };
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
