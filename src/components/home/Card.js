import React from 'react';


const Card = () => {
  const intro = 'This is my React Playground for training, testing, refactoring and improving.';

	return (

		<div className="ui computer only">
      
      <div className="header">
        
          <h2>I am Sophie</h2>
          
          <div className="description">
          
            <p><i className="terminal icon green"></i>A Front-end developer <i className="computer icon olive"></i> </p>
            <p><i className="female icon pink"></i>A Proud Mom<i className="child icon teal"></i></p>
            <p><i className="smile outline icon yellow"></i>A Rational Optimist <i className="star icon yellow"></i></p>
          </div>
          
          <div className="ui divider"></div>

          <p className="description">{intro}</p>
        
          <div className="ui divider"></div>

      </div>

    </div>
	)
}

export default Card;