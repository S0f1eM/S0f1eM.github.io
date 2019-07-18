import React from 'react';
import NasaContainer from '../components/Nasa/NasaContainer';
import Card from '../components/Home/Card';



class About extends React.Component{

render() {


	return (
			<div className="ui container grid">
				<Card />
				<div className="eight wide column">
					<NasaContainer />
				</div>
			</div>
	)
}

}


export default About;