import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import NasaReducer from './nasa_reducer';
import authReducer from './authReducer';

//define all the reducers for the store
export default combineReducers({
	posts: PostsReducer,
	astronomy : NasaReducer,
	auth: authReducer
});

