import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//components
import Header from '../components/elements/Header';
import Markdown from '../components/markdown/Markdown';
import Footer from '../components/elements/Footer';


const Home = lazy( () => import('../components/Home'));

const App = () => {
	return (

		<>
		  	<BrowserRouter>
		  		<Header />
		  	  		<Suspense fallback={<div>Loading...</div>} >
						<Route path="/" exact component={Home} />
						<Route path="/playground" exact component={Home} />
			    		<Route path="/markdown" exact component={Markdown} />
			  		</Suspense>
			  	<Footer />
		  	</BrowserRouter>
		</>

	)
};

export default App;

