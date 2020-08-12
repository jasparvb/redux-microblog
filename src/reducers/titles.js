import { 
  ADD_POST, 
  UPDATE_POST, 
  REMOVE_POST, 
  LOAD_TITLES
} from "../actionTypes";


function rootReducer(state = [], action) {
  switch (action.type) {
    case LOAD_TITLES: {
      return [ ...action.titles ];
    }
    case ADD_POST: {
      return [
        ...state,
        { id: action.post.id, 
          title: action.post.title, 
          description: action.post.description,
          votes: action.post.votes
        }
      ];
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
    default:
      return state;
  }
}

export default rootReducer;
