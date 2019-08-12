//React
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//components
import Header from '../components/menu/Header';
import Markdown from '../components/markdown/Markdown';
import Footer from '../components/menu/Footer';
import ImageSearch from '../components/imageSearch/index';


const Home = lazy( () => import('../components/home/Home'));

const App = () => {
	return (

		<div className="ui main container" style={{marginTop: 5 + 'em'}}>
		  <BrowserRouter>
		  	<Suspense fallback={<div>Loading...</div>} >
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/playground" exact component={Home} />
				<Route path="/imageSearch" exact component={ImageSearch} />
			    <Route path="/markdown" exact component={Markdown} />
			  </Suspense>
			</BrowserRouter>
			<Footer />
		</div>

	)
};

export default App;
