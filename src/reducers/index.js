import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import NasaReducer from './nasa_reducer';

export default combineReducers({
	posts: PostsReducer,
	astronomy : NasaReducer
});

