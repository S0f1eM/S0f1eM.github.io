import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

		return (
		<>
			<div className="ui center aligned header" style={{margin: "2em"}}>
				<Link to="/" title="Home page">
					<h1 style={{fontFamily:"Pacifico"}}>Playing with React</h1>
				</Link>
 			</div>		
		</>
		)
	}	


export default Header;