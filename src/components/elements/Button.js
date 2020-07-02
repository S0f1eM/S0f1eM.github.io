import React from 'react';
import { Link } from 'react-router-dom';


const Button = props => {
	const className = `ui labeled icon basic button ${props.color}`;
	
	return (

	<div className="ui computer only">
        <button className={className} style={{margin:"10% 0"}}><i className="code icon"></i>
        	<Link to={props.url} className="ui centered aligned header" style={{color:"teal"}}>{props.title}</Link> 
        </button>
    </div>
	)
}

export default Button;