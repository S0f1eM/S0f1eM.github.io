import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	  const intro = 'We Learn playing with React here';

		return (
		<>		
		<div className="ui center aligned header" style={{margin:"5% 0 10%"}}>
			<div className="ui menu" style={{border:"0px", boxShadow: 'none'}}>
				<div className="ui right menu" style={{border:"0px", boxShadow: 'none'}}>
			  		<a className="" href="https://twitter.com/S0f1eM" target="_blank" rel="noopener noreferrer"><i className="big twitter icon"></i></a>
	      			<a className="" href="https://www.linkedin.com/in/sophie-marchand-web-developer/" target="_blank" rel="noopener noreferrer"><i className="big linkedin icon"></i></a>
	      			<a className="" href="https://github.com/S0f1eM" target="_blank" rel="noopener noreferrer"><i className="big github alternate icon"></i></a>
				</div>
			</div>
			<Link to="/playground" className="active item" style={{color:"#000"}}><h1>Sophie's playground</h1></Link> 
			<div className="ui horizontal section divider">{intro}</div>
		</div>
		</>
		)
	}	


export default Header;