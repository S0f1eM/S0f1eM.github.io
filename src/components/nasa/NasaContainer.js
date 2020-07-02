import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';

const NasaCard = React.lazy( () => import('./NasaCard') );

class NasaContainer extends React.Component {

	componentWillMount() {	
		this.props.fetchData();
	}

	render() {
		return (
		<Suspense fallback={<div>Loading...</div>} >
			<NasaCard data={ this.props.astronomy } />
		</Suspense>
		 )
	}
}

const mapStateToProps = state => {
	return { astronomy: state.astronomy };
}


export default connect(mapStateToProps, { fetchData })(NasaContainer);