import React from 'react';
import NasaContainer from '../../components/nasa/NasaContainer';
import ItemList from '../../components/news/ItemList';
import Card from './Card';


const Home = () => {


	return (
		<>
		
		<div className="ui two column stackable grid">

				<div className="five wide column">
				   <Card />
				   <NasaContainer />
				</div>

					<div className="ten wide column">
				<ItemList />
				</div>

		</div>
	</>
	)
}


export default Home;