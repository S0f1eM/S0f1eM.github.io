import axios from 'axios';
import { FETCH_POSTS } from '../actions/types';


//fetch post from DEV.TO API
export const fetchPosts = () => async dispatch => {
	
    const response = await axios.get('https://dev.to/api/articles');

	dispatch({ 
		type: FETCH_POSTS, 
		payload: response.data 
	});

}


