import devtonews from '../apis/devtonews';
import axios from 'axios';
import { FETCH_POSTS, FETCH_DATA } from '../actions/types';


//fetch post from DEV.TO API
export const fetchPosts = () => async dispatch => {
	
    const response = await devtonews.get('/articles');

	dispatch({ 
		type: FETCH_POSTS, 
		payload: response.data 
	});

}


//fetch data from image random NASA API
export const fetchData = () => {

	const API_KEY = ''
	const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
	const NasaRequest = axios.get(END_POINT+API_KEY);

	return {
		type: FETCH_DATA,
		payload: NasaRequest
	}
}
