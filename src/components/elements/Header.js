import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

		return (
		<>		
		<div className="ui center aligned header" style={{marginTop: "2em"}}>
			<Link to="/playground" className="active item" style={{color:"#1B1C1D"}}><h1 style={{fontFamily:"Pacifico"}}>Sophie's playground</h1></Link> 
			<div className="ui horizontal section divider"><i className="icon star" style={{color:"#1B1C1D"}}></i></div>
		</div>
		</>
		)
	}	


export default Header;