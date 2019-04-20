import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

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
							<p className="message-text">{text}</p>
						</li>
					)}
				</ul>
		}
	}
export default Messages