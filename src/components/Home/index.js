import React from 'react';
import ItemList from './ItemList';
import NasaContainer from '../../components/Nasa/NasaContainer';


const Home = () => {


	return (
		<>
		
		<div className="ui container grid">
			
				<div className="nine wide column">
					<ItemList />
				</div>

				<div className="six wide column">
					<NasaContainer />
				</div>

		</div>
	</>
	)
}


export default Home;