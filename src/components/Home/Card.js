import React from 'react';

class Card extends React.Component {

  render() {
    return (
        <div className="ui container">
              <h2 className="ui header">Hello World !</h2>
              <p className="description">
                I am Sophie, a Web Developer. My favourite skills area is front-end development and this is 
                my React Playground for training, testing, refactoring, improving and so on...
              </p>
            <div className="ui divider"></div>

      </div>
  )
}

}


export default Card;