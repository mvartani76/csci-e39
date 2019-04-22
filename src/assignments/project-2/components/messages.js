import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

const escapeRE = new RegExp(/pizza/g)
const safeRE = (string) => {
  return string.replace(escapeRE, "\\$1")
}

function textToReplace(text) {
	var finaltext = text.replace(/pizza/g, '<img src="https://avatars.dicebear.com/v2/male/bill.svg?options[mood][]=happy" />');
	return finaltext
}


function PizzaInsert(props) {
	var text = props.text;
	console.log(text);
	console.log(text.split("pizza"));

	var pizza_location  = text.search(/pizza/i);
	var pizza_strip = text.split("pizza");
	
	if (pizza_location > 0) {
		console.log("pizza found");
		
		return <p className="message-text">{pizza_strip[0]}<img src="https://s3.amazonaws.com/beacondisco.com/pizza-3.png" height="30" width="30"/></p>;
	}
	if (pizza_location == 0) {
		return <p className="message-text"><img src="https://s3.amazonaws.com/beacondisco.com/pizza-3.png" height="30" width="30" />{pizza_strip[1]}</p>;
	}
	else if (text == "pizza") {
		return <img src="https://s3.amazonaws.com/beacondisco.com/pizza-3.png" height="30" width="30" />;
	}
	else {
		console.log("no pizza found");
		return <p className="message-text">{text}</p>;
	}
}

class Messages extends React.Component {

constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {chat} = this.props

		return <ul className="message-block">
					{chat.messages.map(({id, student, text, createdAt}) =>
						<li key={id}>
							<label>{student.name} at {createdAt.toISOString()}</label>
							<PizzaInsert text={text} />
						</li>
					)}
				</ul>


		}
	}
export default Messages