import React from 'react';
import { Link } from 'react-router-dom';


const Card = () => {

	return (

		<div className="ui computer only">
      
      <div className="header">
                          
      </div>
        <button className="ui labeled icon huge button teal" style={{margin:"10% 0"}}><i className="code icon"></i>
          <Link to="/Markdown" className="ui centered aligned header" style={{color:"#fff"}}>Markdown Generator</Link> 
        </button>
    </div>
	)
}

export default Card;