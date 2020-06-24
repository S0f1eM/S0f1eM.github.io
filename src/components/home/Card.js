import React from 'react';


const Card = () => {
  const intro = 'This is my React Playground for training and testing.';

	return (

		<div className="ui computer only">
      
      <div className="header">
        
          <h3>Hello, I am Sophie</h3>

          <div className="ui divider"></div>
          
          <p className="description">{intro}</p>
        
          <div className="ui divider"></div>

      </div>

    </div>
	)
}

export default Card;