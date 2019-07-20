//React
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//components
import Header from '../components/menu/Header';
import Home from '../components/home/Home';
import Markdown from '../components/markdown/Markdown';
import About from '../components/about/About';
import ItemList from '../components/news/ItemList';
import Footer from '../components/menu/Footer';


const App = () => {
	return (

		<div className="ui main container" style={{marginTop: 5 + 'em'}}>
		  <BrowserRouter>
				<Header />
				<Route path="/" exact component={Home} />
			    <Route path="/markdown" exact component={Markdown} />
			    <Route path="/news" exact component={ItemList} />
			    <Route path="/About" exact component={About} />
			</BrowserRouter>
			<Footer />
		</div>

	)
};

export default App;
