import React from 'react';
import NasaCard from './NasaCard';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/data';



class NasaContainer extends React.Component {

	componentWillMount() {	
		this.props.fetchData();
	}

	render() {
		return (
			<NasaCard data={ this.props.astronomy } />
		 )
	}
}

const mapStateToProps = state => {
	return { astronomy: state.astronomy };
}


export default connect(mapStateToProps, { fetchData })(NasaContainer);