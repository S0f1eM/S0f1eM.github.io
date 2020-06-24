import React, { Suspense  } from 'react';
import NasaContainer from '../../components/nasa/NasaContainer';
import Card from './Card';

const ItemList = React.lazy( () => import('../../components/news/ItemList') );

const Home = () => {


	return (
		<>
		
		<div className="ui two column stackable grid">

			    <div className="ten wide column">
				<Suspense fallback={<div>Loading...</div>} >
				   <ItemList />
				 </Suspense>
				</div>

				<div className="five wide column">
				   <Card />
				   <NasaContainer />
				</div>
			
		</div>
	</>
	)
}


export default Home;