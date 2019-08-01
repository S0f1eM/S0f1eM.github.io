import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import NasaReducer from './nasaReducer';

//define all the reducers for the store
export default combineReducers({
	posts: PostsReducer,
	astronomy : NasaReducer
});

