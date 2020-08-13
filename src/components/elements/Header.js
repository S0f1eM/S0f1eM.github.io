import React from 'react';

const Header = () => {

		return (
		<>
			<div style={{minHeight: "500px", padding: "1em 0em"}} className="ui inverted vertical center aligned segment">
				
				<div className="ui large inverted pointing secondary menu">
					<div className="ui container">
						<a className="item" href="/">Home</a>
							<a className="item" href="/Markdown">Markdown Generator</a>
						<div className="right item">
							<a  href="https://twitter.com/S0f1eM" 
					             target="_blank" 
					             rel="noopener noreferrer" 
					             aria-label="go to the twitter account"><i className="big twitter icon"></i>
           					</a>
				      		<a  href="https://www.linkedin.com/in/sophie-marchand-web-developer/" 
			                	target="_blank" 
			                	rel="noopener noreferrer" 
			                	aria-label="go to the linkedin account"><i className="big linkedin icon"></i>
			            	</a>
				      		<a  href="https://github.com/S0f1eM" 
			                	target="_blank"  
			                	rel="noopener noreferrer"
			                	aria-label="go to the github account"><i className="big github alternate icon"></i>
			            	</a>      
						</div>
					</div>
				</div>
					<div className="ui text container">
						<h1 style={{fontSize: "3em", 
									fontWeight: "normal", 
									marginBottom: "0px", 
									marginTop: "3em", 
									fontFamily:"Pacifico"}} className="ui inverted header">Playing with React</h1>
					</div>
			</div>
		</>
		)
	}	


export default Header;