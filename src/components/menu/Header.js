import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../Authentification/GoogleAuth';

const Header = () => {

		return (
		<>		
		<div className="ui fixed stackable menu">
			  <Link to="/playground" className="active item">Home</Link> 
		  	<div className="right menu">
		  		<Link to="/Markdown" className="item">Markdown Generator</Link>	
            	<div className="item">     
            		<GoogleAuth />
            	</div>
		  </div>
		</div>
		</>
		)
	}	


export default Header;