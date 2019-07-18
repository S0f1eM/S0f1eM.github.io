import React from 'react';
import { sampleMD } from './sampleMD'; 
import { render } from 'react-dom';

import marked from 'marked';


class Markdown extends React.Component {

	state = { 
		text: sampleMD
	};

	componentWillMount() {
		const localStorageText = localStorage.getItem('text');

		if (localStorageText) {
			this.setState({
				text: localStorageText
			});
		}
	}


	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('text', nextState.text );
	}


	editText = event => {
		const text =  event.target.value;
		this.setState({ text });
	}

	renderText = text => {
		const renderText = marked(text, { sanitize: true });

		return { __html: renderText };
	}

	render() {

		return(

		<div className="ui container grid">

			<h2 className="ui header">Markdown Generator</h2>

			<div className="ui row">

				<div className="column eight wide ui form">
				  <div class="field">
					<textarea 
						value={this.state.text}
						rows="35"
						onChange={ (e) => this.editText(e) } 
					/>
					</div>
				</div>

				<div className="column six wide">
					<div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
				</div>

			</div>

			</div>

		)
	}
}


export default Markdown;