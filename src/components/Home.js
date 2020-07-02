import React, { Suspense  } from 'react';
import NasaContainer from './../components/nasa/NasaContainer';
import Video from '../components/Video';
import { Link } from 'react-router-dom';


const ItemList = React.lazy( () => import('../components/elements/ItemList') );

const Home = () => {

	return (
	<div className="ui main container" style={{margin: "5em 0"}}>
		<div className="ui two column stackable grid">
			<div className="ten wide column">
				<Video />
				<NasaContainer />
		    </div>

			<div className="six wide column">
				<Link to="/Markdown" title="Markdown Generator"><h2 style={{fontFamily:"Pacifico", margin:'2em auto'}}>Markdown Generator</h2></Link>
				<Suspense fallback={<div>Loading...</div>} >
				   <ItemList />
				</Suspense>
		    </div>		
		</div>
	</div>
	)
}

export default Home;