import React from 'react';
import NasaContainer from '../../components/nasa/NasaContainer';
import Intro from './Intro';
import ItemList from '../../components/news/ItemList';
import Card from '../../components/about/Card';


const Home = () => {


	return (
		<>
		
		<div className="ui container grid">

				<div className="ten wide column">
				<Intro />
				<ItemList />
				</div>


				<div className="five wide column">
				   <NasaContainer />
				   <Card />
				</div>
		</div>
	</>
	)
}


export default Home;