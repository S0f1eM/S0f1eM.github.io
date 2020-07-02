import axios from 'axios';
import { FETCH_POSTS, FETCH_DATA } from './types';


//fetch post from DEV.TO API
export const fetchPosts = () => async dispatch => {

    const response = await axios.get('https://dev.to/api/articles');

	dispatch({ 
		type: FETCH_POSTS, 
		payload: response.data 
	});

}


//fetch data from image random NASA API
export const fetchData = () => {

	const API_KEY = 'OeVrASwiJW2BEaHrrrau83wy7ekPw2L81Sc6xSpH';
	const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
	const NasaRequest = axios.get(END_POINT+API_KEY);


	return {
		type: FETCH_DATA,
		payload: NasaRequest
	}
}




