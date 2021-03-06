import { 
  ADD_POST, 
  UPDATE_POST, 
  REMOVE_POST, 
  LOAD_TITLES,
  VOTE_POST,
} from "../actionTypes";

function makeTitle({id, title, description, votes}) {
  return {id, title, description, votes};
}

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
      console.log("running update post");
      return state.map(title => title.id === action.post.id 
        ? makeTitle(action.post)
        : title 
      );
    }
    case REMOVE_POST: {
      return state.filter(title => title.id !== action.postId);
    }
    case VOTE_POST:
      return state.map(
          title => title.id === action.post.id ? { ...title, votes: action.votes } : title)
          .sort((a, b) => b.votes - a.votes);

    default:
      return state;
  }
}

export default rootReducer;
