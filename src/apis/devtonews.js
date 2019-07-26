import axios from 'axios';

//fetching data from dev.to api url with axios
export default axios.create({
	baseURL: 'https://dev.to/api/'
})