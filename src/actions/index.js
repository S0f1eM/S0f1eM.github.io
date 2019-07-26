import devtonews from '../apis/devtonews';
import axios from 'axios';


//DEV.TO API
export const fetchPosts = () => async dispatch => {
	
    const response = await devtonews.get('/articles');

	dispatch({ 
		type: 'FETCH_POSTS', 
		payload: response.data 
	});

}


//NASA API
export const fetchData = () => {

	const API_KEY = ''
	const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
	const NasaRequest = axios.get(END_POINT+API_KEY);

	return {
		type: 'FETCH_DATA',
		payload: NasaRequest
	}
}
