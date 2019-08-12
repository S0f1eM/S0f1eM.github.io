import axios from 'axios';
import { FETCH_DATA } from '../actions/types';



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


