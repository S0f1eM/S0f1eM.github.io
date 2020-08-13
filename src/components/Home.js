import React, { Suspense  } from 'react';
import NasaContainer from './../components/nasa/NasaContainer';
import { Link } from 'react-router-dom';
import Video from '../components/elements/Video';

const ItemList = React.lazy( () => import('../components/elements/ItemList') );

const Home = () => {

	return (
	<div className="ui main container" style={{margin: "3em 0"}}>

		<div className="ui stackable two column grid">
			<Suspense fallback={<div>Loading...</div>}>
				<ItemList />
			</Suspense>
		</div>
		
		<div className="ui row" style={{textAlign:'center'}}>
			<div className="ui two column stackable grid">

				<div className="ui column">
				<Link to="/Markdown" title="Markdown Generator">
						<h2 style={{margin:'2em auto'}}>Markdown Generator</h2>
					</Link>	
					<Video />
				</div>
				<div className="ui column">
					<NasaContainer />
				</div>
			</div>
		</div>	
	</div>
	)
}

export default Home;