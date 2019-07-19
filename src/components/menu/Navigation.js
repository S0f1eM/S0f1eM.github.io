import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

	return (
		
		<div className="ui fixed stackable menu">
			  <Link to="/" className="active item">Home</Link> 
		  	<div className="right menu">
		  		 <Link to="/News" className="item">News</Link>	  
		  		<Link to="/Markdown" className="item">Markdown Generator</Link>	
		    	<div className="item">      
	             <a href="https://twitter.com/S0f1eM" target="_blank" rel="noopener noreferrer"><i className="big twitter icon"></i></a>
	             <a href="https://www.linkedin.com/in/sophie-marchand-web-developer/" target="_blank" rel="noopener noreferrer"><i className="big linkedin icon"></i></a>
            	 <a href="https://github.com/S0f1eM" target="_blank" rel="noopener noreferrer"><i className="big github alternate icon"></i></a>
            	</div>
		  </div>
		</div>
	)
}

export default Navigation;