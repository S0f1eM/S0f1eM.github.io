import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions/auth';


//TO DO : test hooks on this part 

class GoogleAuth extends React.Component {

//get the google api auth2 data to init
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '',
				scope: 'email'
			}).then( () => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen( this.onAuthChange );
			})
		});
	}
//get the userId props at signedIn 
	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

//connect with the sign in button 
	onSignInClick = () => {
		window.gapi.auth2.getAuthInstance().signIn();
	}

//disconnect with the sign out button 
	onSignOutClick = () => {
		window.gapi.auth2.getAuthInstance().signOut();
	}

//render the correct button on the page depending on the props 
	renderAuthButton() {

		 if (this.props.isSignedIn === null) { 
		 	return (

		 	<button onClick={this.onSignInClick} className="ui red google button">
		 		<i className="google icon" />
		 		Sign In with Google
		 	</button>
		 	)
		} 

		 else 
			if (this.props.isSignedIn) {
			
			return (
				
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
				//
			) 	

		} 
		else {

			return (

			<button onClick={this.onSignInClick} className="ui red google button">
				<i className="google icon" />
				Sign In with Google
			</button>
			)
		}
	}

	render() {

		return (

			<div>{this.renderAuthButton()}</div>
		)
	}
}


const mapStateToProps = state => {
	return { 
		isSignedIn: state.auth.isSignedIn,
		isSignedOut: state.auth.isSignedOut
	};
}

export default connect ( mapStateToProps, { signIn, signOut } )(GoogleAuth);