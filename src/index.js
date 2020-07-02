import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import promise from 'redux-promise';
import './css/App.css';



const store = createStore(reducers, applyMiddleware(thunk, promise));

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.querySelector("#root")
	);