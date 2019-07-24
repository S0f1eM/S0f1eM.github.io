import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import NasaReducer from './nasa_reducer';
import authReducer from './authReducer';


export default combineReducers({
	posts: PostsReducer,
	astronomy : NasaReducer,
	auth: authReducer
});

