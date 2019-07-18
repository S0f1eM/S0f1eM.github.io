//React
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//components
import Header from '../components/menu/Header';
import NotFound from '../components/NotFound'
import Home from '../components/Home';
import Markdown from '../components/markdown/Markdown';
import About from './About';

const App = () => {
	return (

		<div className="ui main container" style={{marginTop: 5 + 'em'}}>
		  <BrowserRouter>
				<Header />
				<Route path="/" exact component={Home} />
			    <Route path="/markdown" exact component={Markdown} />
			    <Route path="/About" exact component={About} />
			</BrowserRouter>
		
		</div>

	)
};

export default App;