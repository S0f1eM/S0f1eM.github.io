import React from 'react';
import NasaContainer from '../../components/nasa/NasaContainer';
import Intro from './Intro';
import ItemList from '../../components/news/ItemList';
import Card from './Card';


const Home = () => {


	return (
		<>
		
		<div className="ui two column stackable grid">

				<div className="ten wide column">
				<Intro />
				<ItemList />
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