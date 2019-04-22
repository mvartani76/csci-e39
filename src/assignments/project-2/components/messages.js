import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

function PizzaInsert(props) {
	var text = props.text;
	var pizza_url = props.pizzaurl;
	var pizza_location  = text.search(/pizza/i);
	var pizza_strip = text.split("pizza");
	
	if (pizza_location > 0) {
		return <p className="message-text">{pizza_strip[0]}<img src={pizza_url}/></p>;
	}
	if (pizza_location == 0) {
		return <p className="message-text"><img src={pizza_url} />{pizza_strip[1]}</p>;
	}
	else if (text == "pizza") {
		return <img src={pizza_url} />;
	}
	else {
		return <p className="message-text">{text}</p>;
	}
}

class Messages extends React.Component {

constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {chat, imgItems} = this.props

		return <ul className="message-block">
					{chat.messages.map(({id, student, text, createdAt}) =>
						<li key={id}>
							<label>{student.name} at {createdAt.toISOString()}</label>
							<PizzaInsert text={text} pizzaurl={imgItems[0].url} />
						</li>
					)}
				</ul>


		}
	}
export default Messages